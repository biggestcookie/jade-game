import { StorageSerializers, useStorage } from "@vueuse/core";
import { Ref, onMounted, watch } from "vue";
import { useCompleted } from "./use-completed.composable";

export function useWatchChanged(watched: Ref<boolean>, key: string) {
  const { complete } = useCompleted();
  const originalValue = useStorage<boolean | undefined>(
    key,
    undefined,
    localStorage,
    {
      serializer: StorageSerializers.boolean,
    }
  );
  let ignore = true;

  function compareToStored(newValue: boolean) {
    if (originalValue === undefined || ignore) {
      return;
    }

    if (originalValue.value != newValue) {
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

      if (originalValue.value === undefined) {
        originalValue.value = watched.value;
      } else {
        compareToStored(watched.value);
      }
    }, 1000);
  });
}
