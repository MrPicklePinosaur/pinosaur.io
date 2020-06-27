import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import ElementUI from 'element-ui'
import VueTippy, { TippyComponent } from 'vue-tippy'; 

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faCode, faFileAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faDev, faItchIo, faDiscord } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.use(ElementUI);
Vue.use(VueTippy);
Vue.component('tippy',TippyComponent);

library.add(faHome, faCode, faFileAlt, faGithub, faDev, faItchIo, faDiscord);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
