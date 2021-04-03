import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import VersionB from "../views/VersionB.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/version-b",
    name: "VersionB",
    component: VersionB,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
