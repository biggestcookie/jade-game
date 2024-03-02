<script setup lang="ts">
import { useDeviceMotion } from "@vueuse/core";
import { computed, ref, watch } from "vue";
import { useCompleted } from "../composables/use-completed.composable";

const { acceleration } = useDeviceMotion();
const { complete } = useCompleted();
const maxY = ref(0);
const maxZ = ref(0);
const maxYZ = computed(() => (maxY.value + maxZ.value) / 2);

watch(acceleration, () => {
  maxY.value = Math.max(maxY.value, acceleration.value?.y ?? 0);
  maxZ.value = Math.max(maxZ.value, acceleration.value?.z ?? 0);

  if (maxY.value > 50 || maxZ.value > 50) {
    complete();
  }
});
</script>

<template>
  <div class="content">
    <div class="title has-text-white mb-6">when the pimps in the crib ma</div>
    <div class="title has-text-black">*</div>
    <div
      class="crack has-text-black has-text-weight-normal is-family-monospace"
      :style="{ fontSize: `${48 * maxYZ * 0.03}px`, opacity: maxYZ * 0.05 }"
    >
      *
    </div>
    <div class="egg">🥚</div>
    <div
      class="bg"
      :style="{
        opacity: maxYZ * 0.05,
      }"
    />
  </div>
</template>

<style lang="scss" scoped>
.title {
  z-index: 2;
}
.crack {
  z-index: 3;
  position: fixed;
  left: 50%;
  top: 52%;
  transform: translate(-50%, -50%);
}
.egg {
  z-index: 2;
  position: fixed;
  left: 50%;
  top: 50%;
  font-size: 72px;
  transform: translate(-50%, -50%);
}
.bg {
  background-color: red;
  // z-index: 0;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
}
</style>
