<template>
  <div id="app">
    <keep-alive>
        <router-view></router-view>
    </keep-alive>
    <!-- 底部导航栏 -->
    <mt-tabbar :fixed="true" style="background:#4778aa;" v-show="$route.meta.isnavShow">
			<router-link :to="list.routed" class="mint-tab-item" v-for="(list,index) in listData" :key="list.id" :data-index="index">
          <mt-tab-item> 
              <img slot="icon" :src="list.url">
              <span>{{list.named}}</span>
          </mt-tab-item>
			</router-link>
		</mt-tabbar>
  </div>
</template>

<script>
export default {
  name:'App',
  data(){
    return{
        listData:[
          {routed:'/home',url:'./../static/image/首页.png',named:'首页'},
          {routed:'/addressed',url:'./../static/image/通讯录.png',named:'通讯录'},
          {routed:'/task',url:'./../static/image/任务.png',named:'任务'},
          {routed:'/my',url:'./../static/image/我的.png',named:'我的'},
        ]
    }
  },
  methods:{
    loaded(){
      this.showHidden(this.$route.path)
    },
    showHidden(path){
      if(path == '/home'){
          this.listData[0].url = './../static/image/首页(当前).png'
        }else{
          this.listData[0].url = './../static/image/首页.png'
        }
        if(path == '/addressed'){
          this.listData[1].url = './../static/image/通讯录(当前).png'
        }else{
          this.listData[1].url = './../static/image/通讯录.png'
        }
        if(path == '/task'){
          this.listData[2].url = './../static/image/任务(当前).png'
        }else{
          this.listData[2].url = './../static/image/任务.png'
        }
        if(path == '/my'){
          this.listData[3].url = './../static/image/我的(当前).png'
        }else{
          this.listData[3].url = './../static/image/我的.png'
        }
    }
    
  },
  mounted(){
		window.addEventListener('load',this.loaded)
  },
  watch:{
    $route(to,from){
        if(to.path == '/home'){
          this.listData[0].url = './../static/image/首页(当前).png'
        }else{
          this.listData[0].url = './../static/image/首页.png'
        }
        if(to.path == '/addressed'){
          this.listData[1].url = './../static/image/通讯录(当前).png'
        }else{
          this.listData[1].url = './../static/image/通讯录.png'
        }
        if(to.path == '/task'){
          this.listData[2].url = './../static/image/任务(当前).png'
        }else{
          this.listData[2].url = './../static/image/任务.png'
        }
        if(to.path == '/my'){
          this.listData[3].url = './../static/image/我的(当前).png'
        }else{
          this.listData[3].url = './../static/image/我的.png'
        }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;height: 100%;
}
body{margin: 0;padding: 0;}
a{color:#fff;text-decoration: none}
.router-link-active a{color:#1e364f;text-decoration: none;}
li{list-style:none;}
</style>
