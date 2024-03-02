<script setup lang="ts">
import { useStorage } from "@vueuse/core";
import UAParser from "ua-parser-js";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useCompleted } from "../composables/use-completed.composable";
import { useStore } from "../config/store";

const { complete } = useCompleted();
const started = useStorage("started", false);
const router = useRouter();
const store = useStore();

function onStart() {
  store.startTimer();
  complete();
}

const lastPath = ref("");
const isMobile = new UAParser().getDevice()?.type === "mobile";

onMounted(() => {
  // if (!isMobile) {
  //   router.push("/404");
  // }

  const routes = router.getRoutes();
  if (store.progress > 0 && store.progress < routes.length - 3) {
    lastPath.value = routes[store.progress].path;
  }
});
</script>

<template>
  <div v-if="!started">
    <p
      class="is-size-1 mb-5 has-text-primary-light is-family-secondary has-text-weight-normal"
    >
      𓆝 𓆟 𓆞 𓆝 𓆟
    </p>
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
          <li>use your head</li>
          <li>use your phone</li>
          <li>searching is allowed (you won't need it)</li>
          <!-- <li>if you use hints we will remember it</li> -->
          <li>be creative</li>
          <li>be quick...</li>
        </ol>
      </div>
    </div>
    <button v-if="!lastPath" class="button" @click="onStart">
      press to start
    </button>
    <router-link v-else class="button" :to="lastPath">continue</router-link>
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
../composables/use-completed.composable
