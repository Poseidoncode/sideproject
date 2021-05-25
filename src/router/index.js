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
    component: () => import("@/views/About.vue"),
  },
  {
    path: "/test",
    name: "Test",
    component: () => import("@/views/Test.vue"),
  },
  {
    path: "/test2",
    name: "Test2",
    component: () => import("@/views/Test2.vue"),
  },
  {
    path: "/test3",
    name: "Test3",
    component: () => import("@/views/Test3.vue"),
  },
  {
    path: "/provide",
    name: "Provide",
    component: () => import("@/views/ProvideMain.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
