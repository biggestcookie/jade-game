<script setup lang="ts">
import UAParser from "ua-parser-js";
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "./config/store";

const store = useStore();
const router = useRouter();
const isMobile = new UAParser().getDevice()?.type === "mobile";

onMounted(() => {
  if (!isMobile) {
    router.push("/404");
  }
  // switch (store.progress) {
  //   default:
  //     router.push("/");
  //     break;
  // }
});
</script>

<template>
  <div class="has-background-black">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>
