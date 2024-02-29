import { RouteRecordRaw, createMemoryHistory, createRouter } from "vue-router";
import Home from "../pages/home.page.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "welcome",
    },
  },
  {
    path: "/404",
    component: () => import("../pages/not-found.page.vue"),
    meta: {
      title: "404 not found",
    },
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
