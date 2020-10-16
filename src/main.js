import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'bulma/css/bulma.css'
import './../public/css/bootstrap.css'

// import './../public/js/jquery.min.js'
// import 'bootstrap/dist/js/bootstrap'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
