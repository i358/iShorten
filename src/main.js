import Vue from 'vue'
import VueClipboard from 'vue-clipboard2'
import App from './App.vue'
import router from './router'
import VueTippy, { TippyComponent } from "vue-tippy";
import './registerServiceWorker'
import "tippy.js/themes/light.css";
import "tippy.js/themes/light-border.css";
import "tippy.js/themes/google.css";
import "tippy.js/themes/translucent.css";
import Axios from 'axios'

Vue.config.productionTip = false

Vue.prototype.$http = Axios

const csrf = localStorage.getItem("csrftoken")

if (csrf){
  Vue.prototype.$http.defaults.headers.common['X-CSRFToken'] = csrf
}

Vue.prototype.$http.defaults.headers.common['Access-Control-Allow-Origin'] = "https://zealous-wilson-53acc6.netlify.app/"
Vue.prototype.$http.defaults.headers.common['Access-Control-Allow-Methods'] = "GET, POST, PATCH, PUT, DELETE, OPTIONS"
Vue.prototype.$http.defaults.headers.common['Access-Control-Allow-Headers'] = "Origin, X-Requested-With, Content-Type, Accept, X-Auth-Token, access-control-allow-origin, Authorization"
Vue.prototype.$http.defaults.headers.common['Access-Control-Allow-Credentials'] = "true"

Vue.use(VueClipboard)
Vue.use(VueTippy);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
      