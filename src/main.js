import Vue from 'vue'
import App from './App.vue'
import router from './router'
import appData from './data.js'

Vue.config.productionTip = false

let data = {
  connections: appData,
  name: "daniel",
  getConnections() {
    return this.connections;
  },
  triesLeft:5,
  popup: true,
}

new Vue({
  router,
  data: data,
  render: h => h(App)
}).$mount('#app')
