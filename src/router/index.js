import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Inventory from "../views/Inventory.vue";
import Users from "../views/Users.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard
  },
  {
    path: "/inventory",
    name: "Inventory",
    component: Inventory
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () =>
     // import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/users",
    name: "Users",
    component: Users,
  }
];

const router = new VueRouter({
  routes:routes,
  mode:'history',
});

export default router;
