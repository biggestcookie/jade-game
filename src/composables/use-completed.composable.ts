import { useRoute, useRouter } from "vue-router";
import { useStore } from "../config/store";

export function useCompleted(): { complete: () => void } {
  const store = useStore();
  const router = useRouter();
  const route = useRoute();
  const routes = router.getRoutes();

  function complete() {
    const nextPageIndex =
      routes.findIndex((page) => page.name === route.name) + 1;
    if (nextPageIndex < routes.length - 2) {
      store.incrementProgressIfLesser(nextPageIndex);
    }

    store.completeScreen = true;
    setTimeout(() => {
      router.push(routes[nextPageIndex]);
      setTimeout(() => (store.completeScreen = false), 750);
    }, 500);
  }

  return {
    complete,
  };
}
