<template>
  <div class="first">
      <div class="time" @click="gohome"><span>跳过({{count}})</span></div>
  </div>
</template>
<script>
export default {
  name: 'first',
  data(){
    return{
      count:5,
      timer:null
    }
  },
  methods:{
    time(){
    const that = this
      if(that.count == 0){
        that.$router.push({path:'/login'})
      }else{
        that.count--
      }
    },
    gohome(){
      this.$router.push({path:'/login'})
       clearInterval(this.timer)
    }
  },
  created(){
     this.timer = setInterval(this.time,1000)
    },
    //离开组件就清除定时器
    deactivated(){
        clearInterval(this.timer)
    },
}
</script>
<style scoped>
html,body{height: 100%;width: 100%;margin:0;padding:0;}  
span{color:#fff}
.time{width: 70px;height: 30px;line-height: 30px;background: rgba(0,0,0,0.5);position: absolute;right: 0;}
.first{background:url('./../assets/first.png') no-repeat;  
    width:100%;  
    height:100%;  
    background-size:cover;  
    position:absolute;  
    filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='./../assets/first.png',sizingMethod='scale');}
</style>
