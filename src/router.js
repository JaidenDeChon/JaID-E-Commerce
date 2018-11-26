import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Category from "./views/Category.vue";
import Item from "./views/Item.vue";
import About from "./views/About.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/:categoryName",
      name: "category",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Category
      // children: [
      //   {
      //     path: "/:itemTitle",
      //     name: "item",
      //     component: Item
      //   }
      // ]
    },
    {
      path: "/:categoryName/:itemTitle",
      name: "item",
      component: Item
    }
  ]
});
