<center>
  <font face="黑体" size = 6> 基础实验1:连接假的校园网</font>
</center>

<center>
  李晨宇 软件13 2020011366 <br>
  872166619@qq.com
</center>

## 实现思路

首先，我们可以将该静态页面拆解成如下的部分。

<img src="https://tva1.sinaimg.cn/large/e6c9d24ely1h41ys2ag7wj212t0u0acr.jpg" alt="image-20220710173448494" style="zoom:50%;" />

<center>
  图1 页面解构示意图
</center>

接下来对各部分的实现分别展开说明。

1. 带有“欢迎，welcome，”字样的橙色界面(`id="welcome"`)：该部分由橙色的背景以及“欢迎，welcome，”字样组成。参考网站源码可知，该字样是由外部图片引入的，故此处将图片作为背景放置于合适位置，再将剩余部分用对应颜色填充即可。具体实现如下：

   ```css
   background: #E64E2E url('../assets/welcome.png') 30px 46px no-repeat;
   ```

   在处理完了颜色之后，再调整整个div使得其位于合适位置即可。

2. 两个小三角形(`id="triangle"`以及`id="small-triangle"`)：对于三角形的绘制，此处将某个div的`width`和`height`设置为0，这样div就会坍缩成四个等腰直角三角形拼接而成的形状，再将需要的等腰直角三角形设置好其对应的背景颜色，将其余部分设置为透明，即可得到所要的图形。此处以`id="triangle"`的div为例：

   ```css
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
   ```

3. 包含用户名、已连接信息、已用流量信息的信息页(`id="info"`)的实现：首先可以将该部分再解构为三部分：用户信息(`id="username"`)、已连接信息(`id="duration"`和`id="time"`)、已用流量信息(`id="usage"`)。

   其中用户信息、已连接信息实现较为相似，只需将字体大小、颜色等信息进行调节，再布局到相应位置即可，此处对已用流量信息模块实现思路进行重点讲解。

   已用流量信息分为左右两部分，左边用`id="usage"`的div进行布局。右侧的流量使用图上方数字用`ul`进行展示，而进度条部分的实现基于外部资源图片的引入，将对应资源图片设置为`id="usage-bar"`的背景，然后再根据已使用流量计算橙色部分的长度，即可完成显示。另外，进度条末端灰白相间的条纹的实现主要是用两个背景颜色为白色的div对原图进行覆盖，以达到条纹的效果。

4. 断开连接按钮(`id="disconnect-bar-area"`）的实现：该部分将外部资源图片引入到`id="disconnect"`的button即可。
5. 页面下方的info、lib、learn、mail四个链接：该部分的实现主要是将四个超链接以无序列表的形式进行组织，再将超链接的背景图片设置为对应的外部资源即可。

另外，在本次作业作业中发现，原来实现的网站在屏幕较小的设备上运行时，字体较小难以阅读，故本次作业的实现中，采用了“响应式布局”，对小屏幕设备（宽度不超过768px）的设备进行了特殊处理，将用户名、已连接信息和使用流量信息这些关键信息进行了放大，使得即使在小屏幕的环境中运行，也能较为清晰地展示出来，对用户友好，具有移动端兼容性。具体效果如下：

<img src="https://tva1.sinaimg.cn/large/e6c9d24ely1h420d9tin0j20i00d6jrs.jpg" alt="image-20220710182950926" style="zoom: 50%;" />

<center>
  图2 小屏幕环境下未采用响应式布局网页显示情况
</center>

<img src="/Users/lichenyu/Library/Application Support/typora-user-images/image-20220710183143464.png" alt="image-20220710183143464" style="zoom:50%;" />

<center>
  图3 小屏幕环境下采用响应式布局网页显示情况
</center>

## 遇到的问题及解决办法

1. css中的属性值较为繁杂，在完成本次作业的过程中，经常会遇到不知道该如何调整属性以及不知道该调节什么属性的问题。对此，本次作业完成的过程中，多次参考了MDN WEB DOCS，该网站可以快速查询css的属性，并给出了效果以及使用的样例，可以快速完成对各种属性的设置。
2. 由于完成本次作业时，刚接触vue框架，对vue-cli环境的配置以及vue框架较为陌生，造成了第一次作业刚开始时思路不清晰，进度较为缓慢。为此，我到csdn等论坛查阅了大量的教程以及到一些网站看了相关的视频。
3. 由于之前并没有前端开发的经验，所以对前端框架并不是特别了解。为此，我购买了acwing的网课，跟随着老师先做了一个前端的项目，这对于我能够顺利完成作业也起到了较大的帮助。

## 使用说明

本次提交的文件为`vue-cli`工程，使用方法如下：

* 首先在命令行中输入`vue ui`指令，浏览器会跳转到对应的ui界面。
* 在项目管理器中导入`./src/assignment_1`文件夹。
* 在任务一栏中的`server`运行并启动app，访问`http://localhost:8080/`即可查看效果。

