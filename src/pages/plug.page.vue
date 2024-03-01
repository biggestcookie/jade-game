<script setup lang="ts">
import { useBattery } from "@vueuse/core";
import { useWatchChanged } from "../composables/use-watch-changed.composable";

const { charging } = useBattery();

useWatchChanged(charging, "chargeStatus");
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
