import Vue from 'vue'
import App from './App.vue'
import XMUI from 'smartbi-ka-ui'
import 'smartbi-ka-ui/packages/theme-default/lib/index.css'
Vue.use(XMUI)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
