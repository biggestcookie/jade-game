<script setup lang="ts">
import { useStore } from "../config/store";
const store = useStore();
</script>

<template>
  <Teleport to="#app">
    <div v-if="store.completeScreen">
      <div
        class="full has-background-black is-flex is-justify-content-center is-align-items-center"
      >
        <h1 class="is-1 title has-text-primary-light" v-motion-roll-bottom>
          ✓
        </h1>
      </div>
    </div>
  </Teleport>
</template>

<style lang="scss" scoped>
.full {
  z-index: 1000;
  position: absolute;
  height: 100vh;
  width: 100vw;
}
</style>
