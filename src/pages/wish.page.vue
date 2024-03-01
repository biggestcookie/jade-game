<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import { useCompleted } from "../composables/use-completed.composable";

const date = ref<Date>(new Date());
const { complete } = useCompleted();

let interval: number;

onMounted(() => {
  interval = setInterval(() => {
    date.value = new Date();
    const hours = date.value.getHours();
    const minutes = date.value.getMinutes();
    if ((hours === 11 || hours === 23) && minutes === 11) {
      complete();
    }
  }, 1000);
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>

<template>
  <div>
    <p class="title has-text-primary-light my-6">°•*⁀⋆</p>
    <p class="title is-5 has-text-primary-light my-6">⁺˚⋆｡make a wish｡⋆˚⁺</p>
    <p class="subtitle">
      {{ date.toLocaleTimeString() }}
    </p>
  </div>
</template>
../composables/use-completed.composable
