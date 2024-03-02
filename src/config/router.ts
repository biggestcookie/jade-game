import { RouteRecordRaw, createMemoryHistory, createRouter } from "vue-router";
import Home from "../pages/home.page.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/morse",
    name: "Morse",
    component: () => import("../pages/morse.page.vue"),
  },
  {
    path: "/plug",
    name: "Plug",
    component: () => import("../pages/plug.page.vue"),
  },
  {
    path: "/wish",
    name: "Wish",
    component: () => import("../pages/wish.page.vue"),
  },
  {
    path: "/theme",
    name: "Theme",
    component: () => import("../pages/theme.page.vue"),
  },
  {
    path: "/drop",
    name: "Drop",
    component: () => import("../pages/drop.page.vue"),
  },
  {
    path: "/tinfoil",
    name: "Tinfoil",
    component: () => import("../pages/tinfoil.page.vue"),
  },
  {
    path: "/victory",
    name: "victory",
    component: () => import("../pages/victory.page.vue"),
  },
  {
    path: "/failure",
    name: "failure",
    component: () => import("../pages/failure.page.vue"),
  },
  {
    path: "/404",
    component: () => import("../pages/not-found.page.vue"),
  },
  { path: "/:pathMatch(.*)*", redirect: "/404" },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
  scrollBehavior: (to) =>
    to.hash
      ? { el: to.hash, behavior: "smooth" }
      : { top: 0, left: 0, behavior: "smooth" },
});

export { router, routes };
