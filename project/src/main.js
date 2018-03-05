// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
//导入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI) //使用mint-ui

import Header from './components/Header'
import Footer from './components/Footer'
import Top from './components/Top'
import Bottom from './components/Bottom'
import Lodding from './components/Lodding'


Vue.component('common-top',Top)
Vue.component('common-header',Header)
Vue.component('common-footer',Footer)
Vue.component('common-bottom',Bottom)
Vue.component('common-lodding',Lodding)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
