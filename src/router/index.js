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
import VersionI from "../views/VersionI.vue";
import VersionJ from "../views/VersionJ.vue";
import VersionK from "../views/VersionK.vue";
import VersionL from "../views/VersionL.vue";
import VersionM from "../views/VersionM.vue";
import VersionN from "../views/VersionN.vue";
import VersionO from "../views/VersionO.vue";
import VersionP from "../views/VersionP.vue";
import VersionQ from "../views/VersionQ.vue";
import VersionR from "../views/VersionR.vue";
import VersionS from "../views/VersionS.vue";
import VersionT from "../views/VersionT.vue";
import Boxes from "../views/Boxes.vue";
import Nav from "../views/Nav.vue";
import ContextBar from "../views/ContextBar.vue";
import ContextBarIrb from "../views/ContextBarIrb.vue";
import ContextBarGata from "../views/ContextBarGata.vue";
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
    path: "/version-i",
    name: "VersionI",
    component: VersionI,
  },
  {
    path: "/version-j",
    name: "VersionJ",
    component: VersionJ,
  },
  {
    path: "/version-k",
    name: "VersionK",
    component: VersionK,
  },
  {
    path: "/version-l",
    name: "VersionL",
    component: VersionL,
  },
  {
    path: "/version-m",
    name: "VersionM",
    component: VersionM,
  },
  {
    path: "/version-n",
    name: "VersionN",
    component: VersionN,
  },
  {
    path: "/version-o",
    name: "VersionO",
    component: VersionO,
  },
  {
    path: "/version-p",
    name: "VersionP",
    component: VersionP,
  },
  {
    path: "/version-q",
    name: "VersionQ",
    component: VersionQ,
  },
  {
    path: "/version-r",
    name: "VersionR",
    component: VersionR,
  },
  {
    path: "/version-s",
    name: "VersionS",
    component: VersionS,
  },
  {
    path: "/version-t",
    name: "VersionT",
    component: VersionT,
  },
  {
    path: "/nav",
    name: "Nav",
    component: Nav,
  },
  {
    path: "/heroes",
    name: "Heroes",
    component: Heroes,
  },
  {
    path: "/boxes",
    name: "Boxes",
    component: Boxes,
  },
  {
    path: "/context-bar",
    name: "ContextBar",
    component: ContextBar,
  },
  {
    path: "/context-bar-irb",
    name: "ContextBar2",
    component: ContextBarIrb,
  },
  {
    path: "/context-bar-gata",
    name: "ContextBar3",
    component: ContextBarGata,
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
