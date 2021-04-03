import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import VersionB from "../views/VersionB.vue";
import VersionC from "../views/VersionC.vue";
import VersionD from "../views/VersionD.vue";
import Heroes from "../views/Heroes.vue";

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
  {
    path: "/version-c",
    name: "VersionC",
    component: VersionC,
  },
  {
    path: "/version-d",
    name: "VersionD",
    component: VersionD,
  },
  {
    path: "/heroes",
    name: "Heroes",
    component: Heroes,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
