<template>
  <div class="section">
       <mt-header title="任务" style="background:#4778aa">
        <router-link to="/home" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
      <div class="box">
          <div style="margin:10px 0;font-weight:bold">开发部</div>
          <div style="font-size:14px;">
              开发部主要负责软件的开发，掌握前后端的各类开发技术；负责软件各项性能的测试。
          </div><br>
          <div style="font-size:12px;">
          <div class="zgh"><span>部门成员</span><span>张三</span><span>TANIN</span></div>
          <div class="zgh"><span>email:</span><span>123456@qq.com</span></div>
          <div class="zgh"><span>部门联系方式:</span><span>123456</span></div>
        </div>
      </div>
  </div>
</template>
<style scoped>
    .section{
        text-align: left;
    }
    .box{
        margin:0 10px;
    }
    .zgh{
        margin-bottom:5px;
    }
</style>
