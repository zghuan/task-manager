<template>
  <div class="task">
      <mt-header title="任务">
        <router-link to="/home" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
      <div class="tab">
        <ul>
          <li v-for="(list,index) in listData" :key="list.id" :data-inedx="index" :class="{current:isActive == index}" @click="tab(index)">{{list.name}}</li>
        </ul>
      </div><hr>
  
<mt-tab-container v-model="active" :swipeable="true">
  <mt-tab-container-item id="tab1">
    <div class="happy" v-for="(item,index) in this.$store.state.itemData" :key="item.id"
     @touchstart="deleteTask(index)" @touchend="clearLoop(index)">
      <div style="display:flex;flex-flow:column;height:100px;background:#fff">
        <div style="flex:3" class="title" @click="gotodetail(index)" :class="{'back':isColor == index}">
          <h4>{{item.name}}</h4>
          <h5>{{item.content}}</h5>
        </div>
        <div style="flex:1;display:flex;font-size:8px;" class="content">
          <span style="flex:1.8">{{item.time | filtime}}</span>
          <span style="flex:1">{{item.section}}</span>
          <span style="flex:1"></span>
          <span style="flex:1"><img src="./../../static/image/task/查看.png" alt="">&nbsp;{{item.check}}</span>
          <span style="flex:1"><img src="./../../static/image/task/转发.png" alt="">&nbsp;{{item.send}}</span>
        </div>
      </div>
      <div class="air"></div>
    </div>
  </mt-tab-container-item>
  <mt-tab-container-item id="tab2">
    2222
  </mt-tab-container-item>
  <mt-tab-container-item id="tab3">
    3333
  </mt-tab-container-item>
  <mt-tab-container-item id="tab4">
    4444
  </mt-tab-container-item>
</mt-tab-container>
<mt-actionsheet
  :actions="actions"
  v-model="sheetVisible">
</mt-actionsheet>
  </div>
</template>
<script>
import { TabContainer, TabContainerItem } from 'mint-ui';
import { Actionsheet } from 'mint-ui';
export default {
  name:'task',
  data(){
    return{
      listData:[
        {name:'新任务'},
        {name:'在列任务'},
        {name:'超时任务'},
        {name:'完成任务'},
      ],
      active:'tab1',
      isActive:0,
      timer:null,
      sheetVisible:false,
      indexing:'',
      isColor:null,
      actions:[
        {name:'确定要删除它吗?',method:this.taskname},
				{name:'删除',method:this.deling}
      ]
    }
  },
  methods:{
    tab(i){
      this.isActive = i
      this.active = 'tab'+parseInt(i+1)
    },
    gotodetail(i){
      this.$store.state.totalName = this.$store.state.itemData[i].name
      this.$router.push({path:'taskdetail'})
    },
    //删除任务
        deleteTask(i){
            this.indexing = i //把当前索引传入数据模型
                if(i == 0){  //第一个任务无法删除
                    this.sheetVisible = false
                }else{
                    const _this = this
                    clearInterval(this.timer)
                    this.timer = setTimeout(function(){
                        _this.sheetVisible = true
                },600) 
            }
        },
    //清除长按删除定时器
        clearLoop(){
            clearInterval(this.timer); 
        },
        taskname(){
          console.log('zgh')
        },
        deling(){
          this.$store.state.itemData.splice(this.indexing,1)
          console.log(this.indexing)
        }
  },
  watch:{
     active(newval,oldval){
       if(newval == 'tab1'){
         this.isActive = 0
       }
       if(newval == 'tab2'){
         this.isActive = 1
       }
       if(newval == 'tab3'){
         this.isActive = 2
       }
       if(newval == 'tab4'){
         this.isActive = 3
       }
     },
     sheetVisible(news,old){
       if(news == true){
         this.isColor = this.indexing
       }else{
         this.isColor = null
       }
     }

  },
  filters:{
    filtime:function(e){
      return e.split(' ')[0]
    }
  }
}
</script>

<style scoped>
.task{height:700px;background: #f3f4f8 }
  .mint-header{background: #4778aa;height: 45px;font-size: 15px;}
  .mint-header-title{height: 45px;}
  .mint-swipe{height: 500px;}
  .tab{background: #f3f4f8;height: 40px;line-height: 40px; }
  .tab ul{display: flex;margin: 0;padding: 0;}
  .tab li{flex: 1;font-size: 12px;}
  .current{background: url('./../../static/image/下选条.png') no-repeat;background-position: center 30px;
  background-size: 40px 5px;color: #4778aa}
  hr{margin: 0;color: #dfe0e1}
  .air{height: 12px;background:#f3f4f8 }
  .mint-tab-container{height: 550px;}
  .mint-tab-container-wrap{height: 550px;}
  .title{text-align: left;}
  .title h4{margin: 8px 0 0 30px;}
  .title h5{margin: 8px 0 0 30px;}
  .content span{text-align: center;line-height: 25px;}
  .content img{width: 10px;height: 10px;}
  .back{background: #dfe0e1;}
</style>
