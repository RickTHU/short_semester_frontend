<template>
  <div id="outter">
    <div id="main-block">
      <div id="network">
        <div id="wifi-logo"></div>
        <div id="network-logo"></div>
      </div>
      <div id="qrcode">
        <p>
          <img src="../assets/qrcode.jpeg" alt="qrcode" width=129px height=129px>
        </p>
        <p id="qrcode-text">欢迎关注清华大学信息服务</p>
      </div>
      <div id="at-tsinghua">
        <a href="about:blank" target="_blank">
          <img src="../assets/at-tsinghua.png" alt="at-tsinghua">
        </a>
      </div>
      <div id="content-block">
        <div id="hi-block"></div>
        <div id="notification-block">
          <p id="notification-text"></p>
        </div>
        <div id="corner"></div>
        <form>
          <div id="login">
            <div id="input-block-1">
              <div class="input-info">
                用户名
                <p class="input-info-english">User ID</p>
              </div>
              <input type="text" class="input-text-block" v-model="userID">
            </div>
            <div id="input-block-2">
              <div class="input-info" >
                密码
                <p class="input-info-english">Password</p>
              </div>
              <input type="password" class="input-text-block" v-model="userPw">
            </div>
          </div>
          <input type="button" name="submit" id="connect" @click.prevent="login(userID,userPw)">
        </form>
        <div id="left-orange-triangle"></div>
        <div id="right-white-triangle"></div>
        <div id="download">
          <ul id="system">
            <li><a id="windows" title="windows">Windows</a></li>
            <li><a id="macos" title="macos">MacOS</a></li>
            <li><a id="linux" title="linux">Linux</a></li>
            <li><a id="android" title="android">Android</a></li>
            <li><a id="ios" title="ios">iOS</a></li>
          </ul>
        </div>
        <div id="widget">
          <ul id="widget-ul">
            <li id="bookmark"><a>收藏<p>Bookmark This Page</p></a></li>
            <li id="help"><a>帮助<p>Help</p></a></li>
            <li id="contact">
              <div id="contact-left">联系<p>Contact</p></div>
              <div id="contact-right">
                +86-10-62784859
                <p><a id="contact-mail">its@tsinghua.edu.cn</a></p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div id="footer">
        清华大学信息化技术中心
        <p id="footer-english">
          Information Technology Center of Tsinghua University
        </p>
      </div>
    </div>
  </div>
</template>
<style>
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
    background: #DADBDC url('../assets/background-login.png')
  }
  #main-block {
    position:relative;
    width:640px;
    height:480px;
    margin:50px auto;
    left:0%;
  }
  #wifi-logo
  {
    width: 320px;
    height: 105px;
    background: url('../assets/wifi_logo.gif') no-repeat;
    float: left;
  }
  #network
  {
    margin-left: -200px;
  }
  #network-logo
  {
    width: 320px;
    height: 105px;
    background: url('../assets/network_logo.png') no-repeat;
    float:left;
    margin-left: -238px;
    margin-top:0px;
  }
  #qrcode
  {
    width: 170px;
    height: 156px;
    float: left;
    margin-left: 60px;
  }
  #qrcode-text
  {
    font-size: small;
    font-family: "Microsoft YaHei", "SimHei", "Apple LiGothic Medium";
  }
  #at-tsinghua
  {
    float:left;
    margin-left: -10px;
    margin-top: 20px;
  }
  #content-block
  {
    width: 768px;
    height: 496px;
    float:left;
    clear:both;
    margin-left: -150px;
    background: url('../assets/content_shadow.png') no-repeat 0 416px;
  }
  #hi-block
  {
    width: 720px;
    height: 304px;
    background: #E64E2E url('../assets/hi.png') no-repeat 32px 28px;
    margin-left: 35px;
  }
  #notification-block
  {
    width: 320px;
    height: 156px;
    background:#E6562E;
    margin-top: -156px;
    margin-left: 20px;
  }
  #corner
  {
    width: 16px;
    height: 16px;
  }
  #notification-text
  {
    width: 320px;
    height: 66px;
    background: #E6562E url('../assets/notification.png') no-repeat 14px 10px;
  }
  #corner
  {
    border-color: transparent #AD3B23;
    border-width: 16px 16px 0 0;
    width: 0;
    height: 0;
    border-style: solid;
    margin-top: -171px;
    margin-left: 20px;
  }
  #login
  {
    width: 464px;
    height: 304px;
    background: #F2F2F2;
    margin-left:335px;
    margin-top: -115px;
    box-shadow: 0 0 8px rgb(0 0 0 / 10%);
  }
  #input-block-1
  {
    position: relative;
    top: 35px;
    left: 35px;
    width: 400px;
    height: 48px;
  }
  .input-info
  {
    width: 63px;
    height: 48px;
    font-family: "Microsoft YaHei", "SimHei", "Apple LiGothic Medium";
    float: left;
    height: 48px;
    font-size: 21px;
    text-align: left;
  }
  .input-info-english
  {
    font-family: Verdana, Geneva, sans-serif;
    font-size: 16px;
  }
  .input-text-block
  {
    width: 304px;
    height: 48px;
    margin-right: -25px;;
  }
  #input-block-2
  {
    position: relative;
    top: 55px;
    left: 35px;
    width: 400px;
    height: 48px;
  }
  #connect
  {
    position: relative;
    top: -120px;
    left: 185px;
    width: 398px;
    height: 46px;
    border: #9CB22E solid 1px;
    background: #C0CE55 url('../assets/connect.png') no-repeat center 0;
    overflow: hidden;
  }
  #connect:hover
  {
    background-color: #D2E042;
    background-position: center -47px;
  }
  #left-orange-triangle
  {
    width: 0;
    height: 0;
    border-style: solid;
    border-color: #E64E2E transparent transparent #E64E2E;
    border-width: 48px 48px 0 0;
    margin-top: -86px;
    margin-left: 70px;
  }
  #right-white-triangle
  {
    width: 0;
    height: 0;
    border-style: solid;
    left: 688px;
    border-color: #F2F2F2 transparent;
    border-width: 48px 48px 0 0;
    margin-left: 715px;
    margin-top: -14px;
  }
  #download
  {
    width: 304px;
    height: 112px;
    background: url('../assets/download.png') no-repeat 0 8px;
    margin-top: -2px;
  }
  #system
  {
    list-style: none;
    font-family: "Microsoft YaHei", "SimHei", "Apple LiGothic Medium";
    width: 320px;
    height: 48px;
    background: #808080;
    position: relative;
    top: 70px;
    left: -15px;
  }
  li
  {
    display: inline;
  }
  #system > li > a
  {
    display: block;
    padding-top: 36px;
    float: left;
    height: 52px;
    color: #FFF;
    font-size: 14px;
    font-family: Helvetica,Arial, sans-serif;
    margin-top:-20px;
  }
  #windows
  {
    width: 52.75px;
    margin-left: 13px;
    background: url('../assets/windows.gif') no-repeat 2px 0;
  }
  #macos
  {
    width: 44px;
    margin-left: 13px;
    background: url('../assets/macos.gif') no-repeat 0 0;
  }
  #linux
  {
    width: 34px;
    margin-left: 13px;
    background: url('../assets/linux.gif') no-repeat 0 0;
  }
  #android
  {
    width: 45px;
    margin-left: 25px;
    background: url('../assets/android.gif') no-repeat 0 0;
  }
  #ios
  {
    width: 34px;
    margin-left: 20px;
    background: url('../assets/ios.gif') no-repeat 0 0;
  }
  #widget li
  {
    float:left;
    text-align: left;
    font-size: 12px;
    color: #000;
    font-family: "Microsoft YaHei", "SimHei", "Apple LiGothic Medium";
    position: relative;
    left: 310px;
    top: -30px;
  }
  #contact div
  {
    float: left;
  }
  #bookmark
  {
    background: url('../assets/bookmark.gif') no-repeat 8px 0;
  }
  #bookmark a, #bookmark p
  {
    margin-left: 40px;
  }
  #help
  {
    background: url('../assets/help.gif') no-repeat 0 0;
  }
  #help a, #help p
  {
    margin-left: 40px;
  }
  #contact
  {
    margin-left: 35px;
    background: url('../assets/contact.gif') no-repeat 0 0;
  }
  #contact-left
  {
    margin-left: 30px;
  }
  #contact-right
  {
    margin-left: 10px;
  }
  #footer
  {
    text-align: right;
    float: left;
    font-size: 12px;
    color: #6E6F6F;
    font-family: "Microsoft YaHei", "SimHei", "Apple LiGothic Medium";
    margin-left: 290px;
    margin-top: 40px;
  }
  #footer-english
  {
    font-family: Verdana, Geneva, sans-serif;
  }
  a:hover
  {
    text-decoration: underline;
  }
  .input-text-block
  {
    outline: none;
    font-size: 34px;
    font-family: Helvetica, Arial, sans-serif;
  }
  .input-text-block:focus
  {
    border-color:#FBB03B;
    -webkit-box-shadow:0 0 8px rgba(251,176,59,0.8);
    -moz-box-shadow:0 0 4px rgba(251,176,59,0.8);
    box-shadow:0 0 8px rgba(251,176,59,0.8);
  }
  @media (max-width: 768px)
  {
    .input-info
    {
      width: 100px;
      height: 48px;
      font-family: "Microsoft YaHei", "SimHei", "Apple LiGothic Medium";
      float: left;
      height: 48px;
      font-size: 30px;
      text-align: left;
    }
    .input-text-block
    {
      width: 304px;
      height: 60px;
      margin-right: -25px;;
    }
}
</style>
<script>
import axios from 'axios'
export default
{
  name: 'HomeView',
  components: {
  },
  data(){
    return {
      usage_info:
      {
        user_id: '',
        usage_value:'',
        user_password:''
      }
    }
  },
  methods:{
    login(userID, userPw)
    {
      let that = this
      // console.log(userID)
      if(userID == undefined || userPw == undefined)
      {
        alert('请输入用户名和密码')
      }
      else
      {
        axios.post('http://127.0.0.1:5000/login', userID)
        .then(function(response) {
        that.usage_info.user_id = userID
        that.usage_info.usage_value = response.data[userID]
        console.log(that.usage_info.user_id, that.usage_info.usage_value)
        that.$router.push({name:'connect', query:{userID:that.usage_info.user_id, usage_value:that.usage_info.usage_value}})
      })
      }
    }
  }

}
</script>
