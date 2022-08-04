


<template>
  <div class="main">
    <div id="container" ref="chart">
    </div>
  </div>
</template>
<script setup>
import {  onMounted, reactive, ref } from "@vue/runtime-core"
import * as echarts from 'echarts'


//1.通过vue3.x中的refs标签用法，获取到container容器实例
const chart = ref(null);
//2.定义在本vue实例中的echarts实例
let myEcharts = reactive({});

var base = +new Date();
var date = [];
var data = [];
var now = new Date(base);
let usage = 0;
let data_min = 100;
let data_max = 1000;
// 随机生成流量数据
function addData(shift) {
  let hours = now.getHours().toString();
  let minutes = now.getMinutes().toString();
  let seconds = now.getSeconds().toString();
  let cnt = 0;
  if(hours.length == 1) // 将hours minutes seconds补成2位
  {
    hours = '0' + hours;
  }
  if(minutes.length == 1)
  {
    minutes = '0' + minutes;
  }
  if(seconds.length == 1)
  {
    seconds = '0' + seconds;
  }
  date.push([hours, minutes, seconds].join(':'));
  usage += Math.round(Math.random() * 1000);
  data.push(usage); // 流量数据范围为[0, 1000]

  if (shift && data.length > 10) {
    date.shift();
    data.shift();
  }
  now = new Date(+new Date(now) + 2000);
  data_min = data[0];
  data_max = data[data.length - 1];
}
// 将当前时间之前的10个点加入
// for (var i = 1; i <= 10; i++) {
//   addData();
// }
let option = {
  title: {
    text: '流量使用情况'
  },
  tooltip: {
    trigger: 'axis',
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: date,
    name: '时间'
  },
  yAxis: {
    type: 'value',
    name: '流量/kb',
    interval: 1000,
    min: data_min,
    max: data_max,
  },
  series: [
    {
      name: '流量',
      type: 'line',
      smooth: true,
      symbol: 'none',
      stack: 'a',
      areaStyle: {
        normal: {}
      },
      data: data
    }
  ]
};
// 设置interval，时间间隔为2s
setInterval(function () {
  addData(true);
  myEcharts.setOption({
    xAxis: {
      data: date
    },
    yAxis: {
        min: data_min,
        max: data_max,
    },
    series: [
      {
        name: '流量',
        data: data
      }
    ]
  });
}, 2000);

//onMounted钩子函数
onMounted(()=>{
    //初始化echarts
    init();
})
//初始化echarts实例方法
const init = ()=>{
    //3.初始化container容器
    myEcharts= echarts.init(chart.value);
    //5.传入数据
    myEcharts.setOption(option);
    //additional：图表大小自适应窗口大小变化
    window.onresize = ()=>{
        myEcharts.resize();
    }
}

</script>
<style scoped>
#container{
    box-sizing: border-box;
    height: 800px;
    width: 80%;
    margin: 100px auto;
}
</style>