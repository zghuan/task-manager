// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css' //导入mint-ui
Vue.config.productionTip = false
Vue.use(Mint);
import store from './store/index'
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
