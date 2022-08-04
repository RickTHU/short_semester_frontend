<center>
  <font face="黑体" size=6>作业三：时序数据动态折线图的实现</font>
</center>

<center>
  李晨宇 2020011366 872166619@qq.com
</center>

## 实现思路

### `addData`

本次规定为每2秒增加[0,1000]Kb的流量。由于x轴表示对应的时间，y轴表示对应的流量，故对于生成的时序数据，应该分别存储其时间值和流量值。该功能由`addData`方法实现。`addData`方法获取当前对应的时间并生成对应的流量，分别存储在`date`和`data`列表中。对于生成的时间数据，为满足"HH:mm:ss"格式，对与`hours`、`minutes`和`seconds`变量的长度进行判定，若长度小于2，则在开头位置补0。由于折线图中显示10个点的数据，故当`date.length`大于10之后，需要进行`shift`操作，使得图中最多只有10个点。另外，`addData`还负责维护变量`data_min`和`data_max`，分别记录`data`中的最小和最大的变量值。

### `setInterval`

此处调用`setInterval`方法来实现折线图的动态更新，每2s执行一次，首先调用`addData`方法添加数据，然后再将x轴和y轴的参数设置为对应的值。另外，为了展示美观，此处将y轴的最小值和最大值分别设置为`data_min`和`data_max`，避免了图标中y轴刻度线过多的情况。

### x轴、y轴等信息的设定

最后在option中完成对x轴、y轴、标题等信息的设置，并用tooltip实现“鼠标放在折线图上可显示对应X坐标的Y值”。

### 拓展功能

在已连接的页面中，已连接的时间可以动态调整，每次连接后从00:00:00开始增加。

**以上效果见最后的演示视频。**

## 遇到的问题及解决办法

### 不知如何将echarts导入vue3

刚开始写作业3时，查阅了csdn上的教程，一直无法将echarts导入vue中，每次页面都无法正常显示，浪费了很多时间。在踩了许多坑之后，才发现网上的主流教程主要是针对vue2的，不适用于vue3。直到后来才发现创建的是vue3项目，查阅了教程之后顺利使图表显示。

## 使用说明

本次作业的代码位于`src`文件夹，其结构如下(略去modules文件夹部分)：

```bash
.
├── README.md
├── babel.config.js
├── global.js
├── jsconfig.json
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
├── server.py
├── node_modules
├── src
│   ├── App.vue
│   ├── assets
│   │   ├── android.gif
│   │   ├── at-tsinghua.png
│   │   ├── background-login.png
│   │   ├── bg.png
│   │   ├── bookmark.gif
│   │   ├── connect.png
│   │   ├── contact.gif
│   │   ├── content_shadow.png
│   │   ├── disconnect_bar.png
│   │   ├── download.png
│   │   ├── help.gif
│   │   ├── hi.png
│   │   ├── info_logo.gif
│   │   ├── ios.gif
│   │   ├── learn_logo.gif
│   │   ├── lib_logo.gif
│   │   ├── linux.gif
│   │   ├── macos.gif
│   │   ├── mail_logo.gif
│   │   ├── network_logo.png
│   │   ├── notification.png
│   │   ├── qrcode.jpeg
│   │   ├── usege_bar.gif
│   │   ├── welcome.png
│   │   ├── wifi_logo.gif
│   │   └── windows.gif
│   ├── components
│   ├── main.js
│   ├── router
│   │   └── index.js
│   ├── store
│   │   └── index.js
│   └── views
│       ├── ConnectView.vue
│				├── HomeView.vue
│       └── InfoView.vue
└── vue.config.js
```

运行代码时，实现先用vue-cli工具运行前端界面，然后在用`python3 ./src/server.py`命令运行后端。

代码运行视频链接：https://cloud.tsinghua.edu.cn/f/7ff7a874db9a484794b5/