import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        itemData:[
            {
                name:'任务1',
                content:'这是新任务请相关人员接收',
                time:'12-13,13:25',
                section:'研发部',
                check:2,
                send:3,
            }
        ],
        totalName:'',
        tasktime:'2017-11-13 至 2017-11-30'
    },
    mutations:{
        
    },
    getters:{

    },
    actions:{

    }
})