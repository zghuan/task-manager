<template>
  <div class="addtask">
      <!-- 头部 -->
      <mt-header title="新建任务">
        <router-link to="/home" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
        <router-link to="" slot="right" v-show="ok" >
          <mt-button @click="postTask">完成</mt-button>
        </router-link>
      </mt-header>
        <div class="form">
            <input type="text" placeholder="任务名" v-model="zgh1">
        </div>
        <div class="form2">
            <span @click="time1">
                <input type="text" v-model="year1">-
                <input type="text" v-model="mon1">-
                <input type="text" v-model="day1">
            </span>
            &nbsp;至&nbsp;
            <span @click="time2">
                <input type="text"  v-model="year2">-
                <input type="text"  v-model="mon2">-
                <input type="text"  v-model="day2">
            </span>
        </div>
            <mt-datetime-picker
                ref="picker1"
                type="date"
                v-model="pickerValue1"
                @confirm="handleConfirm1">
            </mt-datetime-picker>
            <mt-datetime-picker
                ref="picker2"
                type="date"
                v-model="pickerValue2"
                @confirm="handleConfirm2">
            </mt-datetime-picker>
      <div class="air"></div>
            <mt-cell title="工作人员"  is-link value="添加">
                <img slot="icon" src="./../../static/image/task/工作人员.png" width="23" height="23">
            </mt-cell>
            <mt-cell title="文件"  is-link value="">
                <img slot="icon" src="./../../static/image/task/文件.png" width="23" height="23">
            </mt-cell>
        <div class="air"></div>
        <div class="content">
            <textarea  id="zgh" cols="30" rows="10" placeholder="请输入任务内容及工作安排" v-model="zgh2"></textarea>
        </div>
  </div>
</template>
<script>
import { DatetimePicker } from 'mint-ui';
import { Indicator } from 'mint-ui';
export default {
  data(){
      return{
          ok:false,
          zgh1:'',
          zgh2:'',
          pickerValue1:'',
          pickerValue2:'',
          year1:'',
          mon1:'',
          day1:'',
          year2:'',
          mon2:'',
          day2:'',
          afterTime1:'',
          afterTime2:'',
      }
  },
  methods:{
       time1(){
            this.$refs.picker1.open();
        },
        handleConfirm1(e){
            this.afterTime1 = this.formatDate(e);  
            this.year1 = this.afterTime1.split('-')[0]
            this.mon1 = this.afterTime1.split('-')[1]
            this.day1 = this.afterTime1.split('-')[2]
           
        },
        time2(){
           this.$refs.picker2.open();
        },
        handleConfirm2(e){
            this.afterTime2 = this.formatDate(e);  
            this.year2 = this.afterTime2.split('-')[0]
            this.mon2 = this.afterTime2.split('-')[1]
            this.day2 = this.afterTime2.split('-')[2]
        },
        formatTen(num) {   
            return num > 9 ? (num + "") : ("0" + num);   
        },
    //中国标准时间转标准日期
        formatDate(date) {   
            var year = date.getFullYear();   
            var month = date.getMonth() + 1;   
            var day = date.getDate();   
            var hour = date.getHours();   
            var minute = date.getMinutes();   
            var second = date.getSeconds();   
            return year + "-" + this.formatTen(month) + "-" + this.formatTen(day);   
        },
    //提交任务
        postTask(){
            Indicator.open({
                text: '提交中...',
                spinnerType: 'fading-circle'
            })
            const that = this
                setTimeout(function(){
                that.$router.push({path:'/task'})
                Indicator.close();
                
                },2000)
            this.$store.state.itemData.push({
                name:this.zgh1,
                content:this.zgh2,
                time:this.afterTime1+' '+'至'+' '+this.afterTime,
                section:'研发部',
                check:0,
                send:0,
                alltime:this.afterTime1+' '+'至'+' '+this.afterTime,
            })
        }
  },
  //初始化数据
  activated(){
        this.zgh1 = ''
        this.zgh2 = ''
        this.year1=''
        this.mon1=''
        this.day1=''
        this.year2=''
        this.mon2=''
        this.day2=''
  },
  watch:{
      zgh1(val){
          if(val.length>0){
              this.ok = true
          }else{
              this.ok = false
          }
      },
       
  }
}
</script>

<style>
.addtask{margin: 0;padding: 0;}
.mint-header{background: #4778aa;height: 45px;font-size: 15px;}
.mint-button-text{font-size: 13px;}
.form input{width: 100%;height: 50px;outline: none;text-indent: 45px;}
.form input:nth-child(1){background: url('./../../static/image/task/文件名.png') no-repeat;
background-size: 23px 23px;background-position: 10px 15px;border-left:0;border-top:0;border-right:0;}
.form2{height: 50px;text-align: left;background: url('./../../static/image/task/日期.png') no-repeat;
background-size: 23px 23px;background-position: 10px 15px;}
.form2 span:nth-child(1){margin-left: 50px;line-height: 50px;}
.form2 input{outline: none;width: 30px;border-left:0;border-top:0;border-right:0;color:#242425;
border-color: #525253;text-align: center
 }
.air{height: 12px;background:#f3f4f8;}
.mint-cell-title{flex: none}
.mint-cell-value.is-link{position: absolute;right: 10px;font-size: 13px;}
.mint-cell-text{font-size: 13px;margin-left: 10px;}
.mint-cell-mask::after{border-top:0;}
textarea{width: 100%;height: 100%;outline: none;border: 0;text-indent: 10px;margin-top: 10px;}
.mint-datetime-action{color: #4778aa}
</style>
