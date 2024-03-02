<script setup lang="ts">
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "../config/store";

const store = useStore();
const router = useRouter();
const route = useRoute();

const progressMsg = computed(() => {
  const routes = router.getRoutes();
  const msg: [string, string | undefined][] = [];

  const currentPageIndex = routes.findIndex((page) => page.name === route.name);

  for (let index = 0; index < routes.length - 2; index++) {
    if (index === currentPageIndex) {
      msg.push(["⊛", undefined]);
    } else if (index < store.progress) {
      msg.push(["⦿", routes[index].path]);
    } else if (index === store.progress) {
      msg.push(["⊙", routes[index].path]);
    } else {
      msg.push(["⊚", undefined]);
    }
  }
  return msg;
});
</script>

<template>
  <nav
    class="navbar is-fixed-bottom has-background-black is-dark"
    role="navigation"
  >
    <div class="is-flex is-justify-content-center is-size-4 is-family-code">
      <template v-for="[text, path] in progressMsg">
        <router-link v-if="path" :to="path" class="has-text-white mx-1">
          {{ text }}
        </router-link>
        <p v-else class="mx-1">{{ text }}</p>
      </template>
    </div>
  </nav>
</template>
