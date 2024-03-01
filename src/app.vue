<script setup lang="ts">
import { useWakeLock } from "@vueuse/core";
import { onMounted } from "vue";
import ProgressComponent from "./components/progress.component.vue";
import CompletedComponent from "./composables/completed.component.vue";

const { request } = useWakeLock();

onMounted(async () => {
  await request("screen");
});
</script>

<template>
  <div>
    <completed-component />
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
