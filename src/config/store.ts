import { useStorage } from "@vueuse/core";
import { defineStore } from "pinia";

export const useStore = defineStore("store", {
  state: () => ({
    progress: useStorage("progress", 0),
  }),
});
