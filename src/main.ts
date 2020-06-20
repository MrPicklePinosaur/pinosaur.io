import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import ElementUI from 'element-ui'
import VueTippy, { TippyComponent } from 'vue-tippy'; 

Vue.use(ElementUI);
Vue.use(VueTippy);
Vue.component('tippy',TippyComponent);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
