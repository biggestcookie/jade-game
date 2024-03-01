import { useStorage } from "@vueuse/core";
import { Ref, onMounted, watch } from "vue";
import { useCompleted } from "./use-completed.composable";

export function useWatchChanged(watched: Ref<boolean>, key: string) {
  const { complete } = useCompleted();
  const oldValue = useStorage<boolean | undefined>(key, undefined);
  let ignore = true;

  function compareToStored(newValue: boolean) {
    if (oldValue === undefined || ignore) {
      return;
    }
    console.log(oldValue.value);
    console.log(newValue);
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
      ignore = false;

      if (oldValue.value === undefined) {
        console.log("storing: " + watched.value);
        oldValue.value = watched.value;
      } else {
        compareToStored(watched.value);
      }
    }, 1000);
  });
}
