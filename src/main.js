import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import animation from 'animate.css'

Vue.use(ElementUI)
Vue.use(animation)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
