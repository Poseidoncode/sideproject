import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/test",
    name: "Test",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Test.vue"),
  },
  {
    path: "/test2",
    name: "Test2",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Test2.vue"),
  },
  {
    path: "/test3",
    name: "Test3",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Test3.vue"),
  },
  {
    path: "/provide",
    name: "Provide",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ProvideMain.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
