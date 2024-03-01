<script setup lang="ts">
import { usePreferredDark } from "@vueuse/core";
import { useWatchChanged } from "../composables/use-watch-changed.composable";

const isDark = usePreferredDark();

useWatchChanged(isDark, "isDark");
</script>

<template>
  <div>
    <template v-if="isDark">
      <p class="title has-text-white my-6">⋆⁺₊⋆ ☾ ⋆⁺₊⋆</p>
      <p class="title has-text-white my-6">↓</p>
      <p class="title has-text-black my-6">˖ ݁✿ ݁˖ ☼ ˖ ݁✿ ݁˖</p>
      <div class="bg1 has-background-black" />
      <div class="bg2 has-background-white" />
    </template>
    <template v-else>
      <p class="title has-text-black my-6">˖ ݁✿ ݁˖ ☼ ˖ ݁✿ ݁˖</p>
      <p class="title has-text-black my-6">↓</p>
      <p class="title has-text-white my-6">⋆⁺₊⋆ ☾ ⋆⁺₊⋆</p>
      <div class="bg1 has-background-white" />
      <div class="bg2 has-background-black" />
    </template>
  </div>
</template>

<style lang="scss" scoped>
.title {
  z-index: 2;
  position: relative;
}
.bg1 {
  z-index: 1;
  position: fixed;
  width: 100vw;
  height: 50vh;
  top: 0;
  left: 0;
}
.bg2 {
  z-index: 1;
  position: fixed;
  width: 100vw;
  height: 50vh;
  top: 50vh;
  left: 0;
}
</style>
