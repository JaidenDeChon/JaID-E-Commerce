import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store";
import jQuery from "jquery";
import Slick from "vue-slick";

require("../node_modules/slick-carousel/slick/slick.css");
require("../node_modules/slick-carousel/slick/slick-theme.css");

Vue.config.productionTip = false;

window.jQuery = window.$ = jQuery;

// Vue.use(router);

new Vue({
  router,
  store,
  Slick,
  jQuery,
  render: h => h(App)
}).$mount("#app");

// console.log(Slick);
