import Vue from 'vue'
import App from './layouts/App.vue'

Vue.config.productionTip = false
import router from './plugins/router'

import store from './plugins/vuex'

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
