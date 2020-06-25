import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import ElementUI from 'element-ui'
import VueTippy, { TippyComponent } from 'vue-tippy'; 

import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithubSquare, faDev, faItchIo } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.use(ElementUI);
Vue.use(VueTippy);
Vue.component('tippy',TippyComponent);

library.add(faGithubSquare, faDev, faItchIo);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
