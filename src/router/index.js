import Vue from 'vue'
import Router from 'vue-router'
import first from '@/components/first'
import login from '@/components/login'
import home from '@/components/home'
import addressed from '@/components/addressed'
import task from '@/components/task'
import taskdetail from '@/components/taskdetail'
import addtask from '@/components/addtask'
import my from '@/components/my'
import section from '@/components/section'
import deily from '@/components/deily'
import write from '@/components/write'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/first'
    },
    {
      path: '/first',
      name: 'first',
      component: first,
      meta:{
        isnavShow:false
      }
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      meta:{
        isnavShow:false
      }
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      meta:{
        isnavShow:true
      }
    },
    {
      path: '/addressed',
      name: 'addressed',
      component: addressed,
      meta:{
        isnavShow:true
      }
    },
    {
      path: '/task',
      name: 'task',
      component: task,
      meta:{
        isnavShow:true
      }
    },
    {
      path: '/taskdetail',
      name: 'taskdetail',
      component: taskdetail,
      meta:{
        isnavShow:false
      }
    },
    {
      path: '/addtask',
      name: 'addtask',
      component: addtask,
      meta:{
        isnavShow:false
      }
    },
    {
      path: '/my',
      name: 'my',
      component: my,
      meta:{
        isnavShow:true
      }
    },
    {
      path: '/section',
      name: 'section',
      component: section,
      meta:{
        isnavShow:true
      }
    },
    {
      path: '/deily',
      name: 'deily',
      component: deily,
      meta:{
        isnavShow:true
      }
    },
    {
      path: '/write',
      name: 'write',
      component: write,
      meta:{
        isnavShow:true
      }
    },
  ]
})
