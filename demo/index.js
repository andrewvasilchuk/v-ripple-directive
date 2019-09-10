import Vue from 'vue'
import App from './App.vue'
import VRipple from '../src'

Vue.config.productionTip = false

Vue.use(VRipple)

new Vue({
  el: '#app',
  render: h => h(App),
})
