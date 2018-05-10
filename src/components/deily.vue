<template>
  <div class="zgh">
      <mt-header title="工作日志" style="background:#4778aa">
        <router-link to="/home" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
        <router-link to="/write" slot="right">
          填写
        </router-link>
      </mt-header>
      <div class="deily"></div>
  </div>
</template>
<style scoped>
    .deily{
        width:100%;
        height: 667px;
        background:url('../assets/bg.png');
        background-size: 100% 100%;
    }
</style>
