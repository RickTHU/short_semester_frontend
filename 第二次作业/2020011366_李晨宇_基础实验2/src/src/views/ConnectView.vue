<template >
  <div id="outter">
    <div id="main-block">
      <div id="welcome"></div>
      <div id="triangle"></div>
      <div id="info">
        <h2 id="username">{{this.$route.query.userID}}</h2>
        <div id="content">
          <div id="duration">
            已连接
            <div id="duration-english">
              Duration
            </div>
          </div>
          <span id="time">
            06:14:17
          </span>
          <div id="usage">
            已用流量
            <div id="usage-english">
              Usage
            </div>
          </div>
          <div id="usage-bar">
            <ul id="use-num">
              <li class="bar-item">50</li>
              <li class="bar-item">75</li>
              <li class="bar-item">100</li>
              <li class="bar-item">125</li>
            </ul>
              <div id="use-sum" :style="{width: setWidth}"></div>
              <div id="first-stripe"></div>
              <div id="second-stripe"></div>
              <div id="use-value">{{this.$route.query.usage_value}}G</div>
          </div>
        </div>
      </div>
        <div id="disconnet-bar-area">
          <button id="disconnect" @click.prevent="disconnect()"></button>
        </div>
        <div id="small-triangle"></div>
        <ui id="links">
          <li><a id='Info' href="http://info.tsinghua.edu.cn/" target="_new" >Info</a></li>
          <li><a id='Lib' href="https://lib.tsinghua.edu.cn/" target="_new" >Lib</a></li>
          <li><a id='Learn' href="https://learn.tsinghua.edu.cn/" target="_new" >Learn</a></li>
          <li><a id='Mail' href="https://mails.tsinghua.edu.cn/" target="_new" >Mail</a></li>
        </ui>
    </div>
  </div>
</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  *{
    padding:0;
    border:0;
    margin:0;
  }
  #outter
  {
    position: absolute;
    width: 100%;
    height: 100%;
    background:#E6E6E6 url('../assets/bg.png') no-repeat top right;
  }
  #main-block {
    position:relative;
    width:640px;
    height:480px;
    margin:50px auto;
    left:0%;
  }
  #welcome
  {
    position:relative;
    top:100px;
    width:512px;
    height:224px;
    background: #E64E2E url('../assets/welcome.png') 30px 46px no-repeat;
  }
  #triangle
  {
    width: 0px;
    height: 0px;
    border-top: 25px solid #E64E2E;
    border-left: 25px solid #E64E2E;
    border-right: 25px solid transparent;
    border-bottom: 25px solid transparent;
    margin-left: 30px;
    position:relative;
    top:100px;
  }
  #small-triangle
  {
    width: 0px;
    height: 0px;
    border-top: 10px solid transparent;
    border-left: 10px solid #CCCCCC;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #CCCCCC;
    margin-left: 10px;
    position:relative;
    top:-290px;
    left:540px;
  }
  #info
  {
    position: relative;
    top:-240px;
    left:135px;
    padding:32px;
    width:352px;
    height:208px;
    background: #F2F2F2;
    top:-140px;
  }
  #username
  {
    float:left;
    color:#E64E2E;
    font-family:Helvetica, Arial, sans-serif;
    font-size: 34px;
    font-weight: lighter;
  }
  #content
  {
    position:relative;
    top:45px;
    height:112px;
  }
  #duration
  {
    position: relative;
    clear:left;
    float:left;
    width:56px;
    height:32px;
    text-align:right;
    font-size: 13px;
    margin-top:-33px;
    font-family: "Microsoft YaHei", "SimHei", "Apple LiGothic Medium";
    display:inline;
  }
  #duration-english
  {
    font-family: Verdana, Geneva, sans-serif;
  }
  #usage
  {
    position: relative;
    clear:left;
    float:left;
    width:56px;
    height:32px;
    text-align:right;
    font-size: 13px;
    margin-top:25px;
    font-family: "Microsoft YaHei", "SimHei", "Apple LiGothic Medium";
    display:inline;
  }
  #time
  {
    position:absolute;
    color:#ec6677;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 28px;
    font-weight: lighter;
    left:80px;
    top: 8px;
  }
  li
  {
    list-style: none;
    display: inline;
  }
  #usage-bar
  {
    width:280px;
    height:32px;
    position:relative;
    float:left;
    background: url('../assets/usege_bar.gif') repeat-y;
    margin: 28px 0 0 16px;
  }
  #use-num
  {
    position: relative;
    top: -16px;
    right: -30px;
    font-family: Verdana, Geneva, sans-serif;
    font-size: 13px;
    color: #969696;
  }
  .bar-item
  {
    margin-left: 30px;
  }
  #use-sum
  {
    background-color: #FBB03B;
    height: 32px;
    width: 18.17px;
    /* width:  */
    float:left;
    position:relative;
    top:-16px;
  }
  #first-stripe
  {
    height: 32px;
    width: 4px;
    background-color: #F2F2F2;
    float:right;
    position:relative;
    top:-16px;
    right:4px;
  }
  #second-stripe
  {
    height: 32px;
    width: 4px;
    background-color: #F2F2F2;
    float:right;
    position:relative;
    top:-16px;
    right:8px;
  }
  #use-value
  {
    position: relative;
    font-family: Helvetica, Arial, sans-serif;
    font-weight: lighter;
    height: 28px;
    float: left;
    font-size: 24px;
    top:-12px;
  }
  #disconnet-bar-area
  {
    position:relative;
    top: -190px;
    right: -360px;
    width: 208px;
    height: 80px;
    background: #FFFFFF;
  }
  #disconnect
  {
    margin:16px;
    width:174px;
    height:46px;
    border:#B2AABE solid 1px;
    background: #C0BDCC url('../assets/disconnect_bar.png') no-repeat center 0;
  }
  #disconnect:hover
  {
    background-color:#D6D2E0;
    background-position:center -47px;
  }
  #disconnect:active
  {
    background-color:#B1AAC4;
    background-position:center -94px;
  }
  #disconnect:disable
  {
    background-color:#CFCFCF;
    background-position:center -141px;
  }
  a
  {
    text-decoration:none;
  }
  a:hover
  {
    text-decoration:underline;
  }
  #links li
  {
    position:relative;
    top:-190px;
    right: -335px;
    float: left;
    margin-right: 12px;
    font-size: 11px;
    font-family: Verdana, Geneva, sans-serif;
    width:50.16px;
    height: 32px;
  }
  #links li a
  {
    display: block;
    padding: 16px 0 0 26px;
    height: 16px;
  }
  #Info
  {
    color:#AD3B23;
    background: url('../assets/info_logo.gif') no-repeat 2px 2px;
  }
  #Lib
  {
    color:#AD3B23;
    background: url('../assets/lib_logo.gif') no-repeat 2px 2px;
  }
  #Learn
  {
    color:#AD3B23;
    background: url('../assets/learn_logo.gif') no-repeat 2px 2px;
  }
  #Mail
  {
    color:#AD3B23;
    background: url('../assets/mail_logo.gif') no-repeat 2px 2px;
  }
  /* 以下是响应式布局部分，保证在小屏幕状态下文字不会过小而难以阅读，对网页的各部分以及文字的大小等属性进行了调整 */
  @media (max-width: 768px)
  {
    #username
    {
      font-size: 40px;
    }
    #duration
    {
      font-size: 20px;
      width:75px;
    }
    #usage
    {
      font-size: 20px;
      width:80px;
    }
    #usage-bar
    {
      width:250px;
      height:32px;
    }
    .bar-item
    {
      margin-left: 20px;
    }
    #use-value
    {
      font-size: 30px;
      top: -15px;
    }
    #time
    {
      position:relative;
      font-size: 35px;
      top: 19px;
      left:-120px;
    }
  }
</style>
<script>
import axios from 'axios'
export default
{
  name: 'ConnectView',
  components: {
  },
  data()
  {
    return{
        username: '',
        usage: '',
    }
  },
  methods: {
    disconnect()
    {
        // this.$router.push({name:'home'})
        let that = this
        let user_id = this.$route.query.userID
        axios.post('http://127.0.0.1:5000/disconnect', this.$route.query.userID)
        .then(function(response){
            console.log(user_id)
            that.$router.push({name:'home'})
        })
    },
  },
  computed: {
    setWidth: function(){
        return ((parseFloat(this.$route.query.usage_value) / 8.57) * 18.17) + 'px';
    }
  }
}
</script>
