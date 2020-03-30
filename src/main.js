import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import router from "./router/index"

// create vue as eventBus object
Vue.prototype.$bus = new Vue();

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
