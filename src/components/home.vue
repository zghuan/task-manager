<template>
  <div class="home">
    <!-- 首屏签到 -->
    <div class="bgimg">
        <input type="text" v-model="search" placeholder="                                                搜索" ref="searchs">
        <div class="qiandao" @click="addSignNum">
          <span>{{sign}}</span>
        </div>
    </div>
    <!-- 任务数据 -->
    <div class="task_data">
      <div class="flex1"></div>
        <div class="newtask">
          <span>1</span>
          <span>最新任务</span>
        </div>
      <div class="flex2"></div>
        <div class="newtask">
          <span>5</span>
          <span>在列任务</span>
        </div>
      <div class="flex2"></div>
        <div class="newtask">
          <span>0</span>
          <span>超时任务</span>
        </div>
      <div class="flex1"></div>
    </div>
    <div class="air"></div>
    <!-- 业务模块 -->
    <div class="task_module">
    <ul class="share-list">
      <li class="gap"></li>
          <li class="lol">
            <router-link to="#">
                <img src="./../../static/image/办公辅助.png">
                <span>办公辅助</span>
            </router-link>
            </li>
      <li class="gap"></li>
          <li class="lol">
            <router-link to="#">
                <img src="./../../static/image/个人信息.png">
                <span>个人信息</span>
            </router-link>
          </li>
      <li class="gap"></li>
          <li class="lol">
            <router-link to="#">
                <img src="./../../static/image/文件.png">
                <span>文件</span>
            </router-link>
            </li>
      <li class="gap"></li>
          <li class="lol">
             <router-link to="#">
                <img src="./../../static/image/通讯录1.png">
                <span>通讯录</span>
             </router-link>
            </li>
      <li class="gap"></li>
      </ul>
       <ul class="share-list">
      <li class="gap"></li>
          <li class="lol">
            <router-link to="#">
                <img src="./../../static/image/数据中心.png">
                <span>数据中心</span>
            </router-link>
            </li>
      <li class="gap"></li>
          <li class="lol">
            <router-link to="/section">
                <img src="./../../static/image/部门分组.png">
                <span>部门分组</span>
            </router-link>
          </li>
      <li class="gap"></li>
          <li class="lol">
            <router-link to="/deily">
                <img src="./../../static/image/工作日志.png">
                <span>工作日志</span>
            </router-link>
            </li>
      <li class="gap"></li>
          <li class="lol">
             <router-link to="#">
                <img src="./../../static/image/收藏.png">
                <span>收藏</span>
             </router-link>
            </li>
      <li class="gap"></li>
      </ul>
       <ul class="share-list">
      <li class="gap"></li>
          <li class="lol">
            <router-link to="#">
                <img src="./../../static/image/设置.png">
                <span>设置</span>
            </router-link>
            </li>
      <li class="gap"></li>
          <li class="lol">
            <router-link to="/task">
                <img src="./../../static/image/任务列.png">
                <span>任务</span>
            </router-link>
          </li>
      <li class="gap"></li>
          <li class="lol">
            <router-link to="/addtask">
                <img src="./../../static/image/新建任务.png">
                <span>新建任务</span>
            </router-link>
            </li>
      <li class="gap"></li>
          <li class="lol">
             <router-link to="#">
                <img src="./../../static/image/定时任务.png">
                <span>定时任务</span>
             </router-link>
            </li>
      <li class="gap"></li>
      </ul>
    </div>
    
     
  </div>
</template>
<script>
export default {
   name: 'home',
  data(){
    return{
      sign:1,
      search:'',
    }
  },
  methods:{
    addSignNum(){
      if(this.sign == 31){
        this.sign = 0
      }else{
        this.sign+=1
      }
    }
  },
  watch:{
    search(val){
        if(val.length>0){
          this.$refs.searchs.style.background = '#fff'
        }else{
         this.$refs.searchs.style.background = ''
        }
    }
  }
}
</script>
<style>
.bgimg{width: 100%;height: 187.5px;background: url('./../../static/image/工作图片.png') no-repeat;
background-size: cover;position: relative}
.qiandao{width: 82px;height: 80px;position: absolute;top:55px;right:61px;
background:url('./../../static/image/签到.png') no-repeat;background-size: cover;}
.bgimg input{width: 90%;height: 25px;margin-top: 7px;border-radius: 10%;outline: none;
background: #fff url('./../../static/image/搜索.png') 47% center no-repeat;background-size: 20px 20px}
.bgimg span{color: #4578aa;font-size: 24px;line-height: 80px;}
.task_data{display: flex;height: 85px;}
.flex1{flex: 1;}
.flex2{flex:2;}
.air{height: 12px;background:#f3f4f8 }
.newtask{display: flex;flex-flow:column; -webkit-flex-flow: column;}
.newtask span:nth-child(1){flex: 2;font-size: 24px;height: 50px;line-height: 55px;}
.newtask span:nth-child(2){flex: 3;height: 40px;color: grey}
.share-list{display: flex;margin: 30px 0 ;padding: 0;}
.share-list a{color: #45464c}

   .lol img{width: 48px;height: 48px;display: block;margin: 0 auto;}
   .lol span{text-align: center;font-size: 8px;}
   .gap{flex: 1;}
  
.mint-tab-item{padding: 5px 0}
</style>
