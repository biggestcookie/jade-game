<script setup lang="ts">
import { useWakeLock } from "@vueuse/core";
import UAParser from "ua-parser-js";
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import ProgressComponent from "./components/progress.component.vue";
import { useStore } from "./config/store";

const store = useStore();
const router = useRouter();
const isMobile = new UAParser().getDevice()?.type === "mobile";
const { request } = useWakeLock();

onMounted(async () => {
  // if (!isMobile) {
  //   router.push("/404");
  // }
  // else
  const routes = router.getRoutes();
  if (store.progress < routes.length - 2) {
    router.push(routes[store.progress].path);
  }
  await request("screen");
});
</script>

<template>
  <div>
    <section class="hero is-fullheight-with-navbar has-background-black">
      <div
        class="hero-body is-flex is-justify-content-center has-text-centered"
      >
        <div class="container">
          <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
              <component :is="Component" />
            </transition>
          </router-view>
        </div>
      </div>
    </section>
    <progress-component />
  </div>
</template>
