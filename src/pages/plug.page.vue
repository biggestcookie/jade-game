<script setup lang="ts">
import { useBattery } from "@vueuse/core";
import { onMounted, watch } from "vue";
import { useCompleted } from "../composables/completed.composable";

const { charging } = useBattery();
const { complete } = useCompleted();

onMounted(() => console.log(charging.value));

let initialIgnore = false;
setTimeout(() => (initialIgnore = true), 500);

watch(charging, (newValue, oldValue) => {
  if (!initialIgnore) {
    initialIgnore = true;
    return;
  } else if (newValue !== oldValue) {
    complete();
  }
});
</script>

<template>
  <h1
    class="is-1 title has-text-white"
    v-motion
    :initial="{
      opacity: 0.2,
    }"
    :enter="{
      opacity: 1,
      transition: {
        duration: 1000,
        repeat: Infinity,
        repeatType: 'mirror',
        ease: 'easeInOut',
      },
    }"
  >
    ☏{{ charging ? "🛇" : "" }}↯
  </h1>
</template>
