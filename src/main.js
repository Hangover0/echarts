// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 全局安装echarts
import echarts from "echarts";
Vue.use(echarts);
import "echarts/theme/mythemes"
Vue.config.productionTip = false
// 导入axios
import Axios from 'axios'
// 将axios挂载到Vue上
Vue.prototype.$axios = Axios



/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
