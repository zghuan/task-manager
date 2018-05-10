<template>
  <div class="login">
      <div class="welcome">欢迎回来</div>
      <div class="image"><img src="./../../static/image/欢迎回来.png" alt=""></div>
      <div class="inputed">
          <div class="tt">
              <input type="text" placeholder="账号" id="use">
          </div><br>
          <div class="pw">
              <input type="password" placeholder="密码" id="pass" autocomplete="new-password">
          </div>
      </div>
      <div class="logining">
        <button @click="gohome">登陆</button>
      </div>
  </div>
</template>
<style>
  .login{display: flex;flex-flow:column; -webkit-flex-flow: column;height: 667px;}
  .welcome{flex:0.1;font-size: 22px;color: black;line-height: 69px;color:#1e364f;}
  .image{flex:0.35;}
   .inputed{flex:0.25}
  .image img{width: 50%;}
  .inputed input{width: 65%;height: 30px;border: 2px solid #1e364f;border-radius: 15px;text-indent: 30px;outline: none}
 .tt input{background: url('./../../static/image/账号.png') 8px center no-repeat;background-size: 15px 18px;}
  .pw input{background: url('./../../static/image/密码.png') 8px center no-repeat;background-size: 15px 18px;margin-top: 10px;}
 
  .logining{flex:0.25;}
  .logining button{outline: none;width: 45%;height:38px;border: 2px solid #1e364f;background: rgb(71,120,170);color: #fff;border-radius: 15px;}
</style>
<script>
import { Indicator } from 'mint-ui';
export default {
    data(){
      return{
        timed:null
      }
    },
    methods:{
      gohome(){
        const that = this
        Indicator.open({
          text: '登录中...',
          spinnerType: 'fading-circle'
        });
        setTimeout(function(){
          that.$router.push({path:'/home'})
          Indicator.close();
        },2000)
      }
    }
}
</script>
