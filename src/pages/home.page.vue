<script setup lang="ts">
import { useStorage } from "@vueuse/core";
import { useRouter } from "vue-router";
import { useStore } from "../config/store";

const started = useStorage("started", false);
const router = useRouter();
const store = useStore();

function onStart() {
  store.startTimer();
  router.push("/morse");
}
</script>

<template>
  <div v-if="!started">
    <a
      @click="started = true"
      class="title mb-5 has-text-weight-normal has-text-primary-light is-family-secondary"
    >
      press to start
    </a>
  </div>
  <div v-else>
    <p
      class="line1 title mb-5 has-text-primary-light is-family-secondary has-text-weight-normal"
    >
      jadegamejadegamejadegamejadegamejadegamejadegamejadegame
    </p>
    <p
      class="line2 title mb-5 has-text-primary-light is-family-secondary has-text-weight-normal"
    >
      jadegamejadegamejadegamejadegamejadegamejadegamejadegame
    </p>
    <div class="block subtitle m-6">
      <div class="subtitle has-text-justified">
        <ol>
          <li>searching is allowed</li>
          <li>if you use hints we will remember it</li>
          <li>be creative</li>
          <li>be quick...</li>
        </ol>
      </div>
    </div>
    <button class="button" @click="onStart">
      press to start
    </button>
  </div>
</template>

<style lang="scss" scoped>
p.title {
  position: fixed;
  white-space: nowrap;
  &.line1 {
    left: -30vw;
    top: 20vh;
  }
  &.line2 {
    left: -19vw;
    top: 23vh;
  }
}
</style>
