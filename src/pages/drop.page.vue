<script setup lang="ts">
import { useDeviceMotion } from "@vueuse/core";

const { acceleration, accelerationIncludingGravity } = useDeviceMotion();
// const max = ref(0);
// const maxGrav = ref(0);

// watch(
//   acceleration,
//   () => (max.value = Math.max(max.value, acceleration.value?.z ?? 0))
// );
</script>

<template>
  <div>x: {{ acceleration?.x?.toFixed(0) }}</div>
  <div>y: {{ acceleration?.y?.toFixed(0) }}</div>
  <div>z: {{ acceleration?.z?.toFixed(0) }}</div>
  <h1>grav:</h1>
  <div>x: {{ accelerationIncludingGravity?.x?.toFixed(0) }}</div>
  <div>y: {{ accelerationIncludingGravity?.y?.toFixed(0) }}</div>
  <div>z: {{ accelerationIncludingGravity?.z?.toFixed(0) }}</div>
  <!-- <div>maxGrav : {{ accelerationIncludingGravity }}</div>
  <div>maxGrav : {{ accelerationIncludingGravity }}</div> -->
</template>
