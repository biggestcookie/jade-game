import { useStorage } from "@vueuse/core";
import { defineStore } from "pinia";

export const useStore = defineStore("store", {
  state: () => ({
    progress: useStorage("progress", 0),
    startTime: useStorage("startTime", 0),
    completionTime: useStorage("completionTime", 0),
    hints: useStorage("hints", []),
    completeScreen: false,
  }),
  actions: {
    incrementProgressIfLesser(value: number) {
      this.progress = value > this.progress ? value : this.progress;
    },
    startTimer() {
      if (this.startTime === 0) {
        this.startTime = new Date().getTime();
      }
    },
  },
});
