<template>
  <div class="taskdetail">
      <mt-header :title="this.$store.state.totalName">
        <router-link to="/task" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
        <router-link to="/task" slot="right">
          <mt-button class="accept">接收</mt-button>
        </router-link>
      </mt-header>
      <div class="zgh">
        <div class="taskjc">
            <span>任务进程</span>
        </div>
        <div class="step">
          <img src="./../../static/image/task/进度条.png" alt="">
        </div>
      </div>
      
      <div class="content">
          <h4>名称:&nbsp;{{this.$store.state.totalName}}</h4>
          <h5>任务时间:{{this.$store.state.tasktime}}</h5><br><br>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请相关收到任务的员工接收任务并按照任务安排工作,相关文件及人员信息请下拉查看</span>
      </div>
      
      <div class="file">
          <span>附件:&nbsp;&nbsp;无</span><hr>
          <img src="./../../static/image/task/word.png" alt="">
      </div>
      <div class="air"></div>
      <div class="people">
          <span>工作人员名单:&nbsp;&nbsp;</span><hr>
      </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      
    }
  },
  methods:{
   
  }
}
</script>
<style>
.taskdetail{height:700px;background: #f3f4f8 }
.zgh{background: #fff}
.mint-header{background: #4778aa;height: 45px;font-size: 15px;}
.mint-button-text{font-size: 13px;}
.taskjc{font-size: 12px;text-align: left;margin: 6px 0 6px 10px;}
.step img{width: 375px;}
.air{height: 12px;background:#f3f4f8 }
.content{text-align: left;margin: 10px 0;color:#3a3a3b;background: #fff;padding: 10px 0 }
.content span{font-size: 10px;display: inline-block;margin:0 10px;}
h4{margin:0 0 0 10px;}
h5{margin:8px 0 0 10px;}
.file{text-align: left;height: 60px;background: #fff}
.file span{color:#bebec0;font-size: 9px;margin-left: 10px}
.file img{width: 20px;margin-left: 10px}
.people{text-align: left;height: 60px;background: #fff}
.people span{color:#bebec0;font-size: 9px;margin-left: 10px}
hr{margin-left: 10px}
</style>
