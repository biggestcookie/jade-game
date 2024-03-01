import { useStorage } from "@vueuse/core";
import { Ref, onMounted, watch } from "vue";
import { useCompleted } from "./use-completed.composable";

export function useWatchChanged(watched: Ref<boolean>, key: string) {
  const { complete } = useCompleted();
  const oldValue = useStorage<boolean | undefined>(key, undefined);
  let ignore = true;

  function compareToStored(newValue: boolean) {
    console.log(oldValue.value);
    console.log(newValue);
    if (oldValue === undefined && ignore) {
      return;
    }
    if (oldValue.value !== newValue) {
      localStorage.removeItem(key);
      complete();
    }
  }

  watch(watched, (newValue) => {
    compareToStored(newValue);
  });

  onMounted(() => {
    setTimeout(() => {
      if (oldValue.value === undefined) {
        oldValue.value = watched.value;
      }
      ignore = false;
      compareToStored(oldValue.value);
    }, 500);
  });
}
