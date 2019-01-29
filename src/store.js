import Vue from "vue";
import Vuex from "vuex";
import Router from 'vue-router'

import categories from "./assets/data.json";
var catelogue = JSON.parse(JSON.stringify(categories));

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    catelogue
  }
});

// console.log(store.state);
