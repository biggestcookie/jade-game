<script setup lang="ts">
import { useOnline } from "@vueuse/core";
import { useWatchChanged } from "../composables/use-watch-changed.composable";

const online = useOnline();
useWatchChanged(online, "wasOnline");
</script>

<template>
  <div>
    <div class="title is-2 has-text-white">𖣐</div>
    <div class="title is-6 has-text-white">⛧°。 ⋆༺go off the grid༻⋆。 °⛧</div>
  </div>
</template>
