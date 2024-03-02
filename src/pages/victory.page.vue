<script setup lang="ts">
import { onMounted } from "vue";
import { useStore } from "../config/store";

const store = useStore();

function formatMsToTime(timeInMiliseconds: number) {
  let h, m, s;
  h = Math.floor(timeInMiliseconds / 1000 / 60 / 60);
  m = Math.floor((timeInMiliseconds / 1000 / 60 / 60 - h) * 60);
  s = Math.floor(((timeInMiliseconds / 1000 / 60 / 60 - h) * 60 - m) * 60);

  return `${h} hours, ${m} minutes, and ${s} seconds`;
}

onMounted(() => {
  store.completionTime = new Date().getTime();
});
</script>

<template>
  <div>
    <div class="title has-text-white is-3">A WINNER</div>
    <div class="title has-text-white is-family-monospace is-5">
      ·:*¨༺ ♱✮♱ ༻¨*:·
    </div>
    <div
      class="title has-text-white is-3 has-text-weight-normal is-family-secondary"
    >
      is you!
    </div>

    <div class="subtitle has-text-white">
      you completed in
      {{ formatMsToTime(store.completionTime - store.startTime) }}
    </div>

    <div class="subtitle">show paul to receive your prize :3</div>
  </div>
</template>
