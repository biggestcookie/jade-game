import { createPinia } from "pinia";
import { createApp } from "vue";
import { MotionPlugin } from "@vueuse/motion";
import App from "./app.vue";
import "./assets/styles/global.scss";
import { router } from "./config/router";

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(MotionPlugin);

router.isReady().then(() => {
  app.mount("#app");
});
