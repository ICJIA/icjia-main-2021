import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import VersionB from "../views/VersionB.vue";
import VersionC from "../views/VersionC.vue";
import VersionD from "../views/VersionD.vue";
import VersionE from "../views/VersionE.vue";
import VersionF from "../views/VersionF.vue";
import VersionG from "../views/VersionG.vue";
import VersionH from "../views/VersionH.vue";
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
    path: "/version-e",
    name: "VersionE",
    component: VersionE,
  },
  {
    path: "/version-f",
    name: "VersionF",
    component: VersionF,
  },
  {
    path: "/version-g",
    name: "VersionG",
    component: VersionG,
  },
  {
    path: "/version-h",
    name: "VersionH",
    component: VersionH,
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
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
