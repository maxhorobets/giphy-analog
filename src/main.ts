import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueResource from 'vue-resource'

Vue.config.productionTip = false

Vue.use(VueResource);

Vue.http.options.root = 'https://api.giphy.com/v1/gifs'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
