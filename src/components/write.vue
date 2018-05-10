<template>
  <div class="write">
      <mt-header title="工作日志" style="background:#4778aa">
        <router-link to="/deily" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
        <router-link to="#" slot="right">
          保存
        </router-link>
      </mt-header>
        <span style="font-size:12px;">2017年1月7日</span>
        <hr class="zgh">
        <div class="ddd">
            <textarea placeholder="请填写当日工作日志" id="" ></textarea>
        </div>
  </div>
</template>
<style scoped>
    .zgh{
        border:1px solid #000;
        background: #000;
    }
    .ddd{
        width: 90%;
        margin:0 auto;
    }
    .ddd textarea{
        width: 100%;
        height: 667px;
        margin: 0 auto;
        border:0;
         outline:none;
    }
    .ddd textarea:active{
      
    }
</style>

