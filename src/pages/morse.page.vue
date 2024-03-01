<script setup lang="ts">
import { useVibrate } from "@vueuse/core";
import { onMounted, onUnmounted, ref } from "vue";
import { useCompleted } from "../composables/use-completed.composable";

const { vibrate, stop } = useVibrate();
const { complete } = useCompleted();
const isVibrating = ref(false);
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const str = ref(["A", "A", "A"]);
const pattern = [
  200, 100, 200, 100, 200, 100, 500, 100, 500, 100, 500, 100, 200, 100, 200,
  100, 200,
];
const patternTime = pattern.reduce((sum, num) => (sum += num));
let interval: ReturnType<typeof setTimeout>;

function changeCharAt(index: number, amount: number) {
  const charIndex = alphabet.indexOf(str.value[index]);
  if (charIndex === 0 && amount < 0) {
    str.value[index] = alphabet[alphabet.length + amount];
  } else if (charIndex === alphabet.length - 1 && amount > 0) {
    str.value[index] = alphabet[amount - 1];
  } else {
    str.value[index] = alphabet[alphabet.indexOf(str.value[index]) + amount];
  }

  const correct = str.value.reduce((correct, value, index) => {
    if (
      ((index === 0 || index === 2) && value !== "S") ||
      (index === 1 && value !== "O")
    ) {
      correct = false;
    }
    return correct;
  }, true);

  if (correct) {
    complete();
  }
}

function startVibrate(): void {
  isVibrating.value = true;
  vibrate(pattern);

  interval = setInterval(() => {
    vibrate(pattern);
  }, patternTime + 2000);
}

function stopVibrate(): void {
  isVibrating.value = false;
  stop();
  clearInterval(interval);
}

// function toggleVibrate(): void {
//   if (isVibrating.value) {
//     stopVibrate();
//   } else {
//     startVibrate();
//   }
// }

onMounted(() => {
  setTimeout(() => startVibrate(), 1000);
});

onUnmounted(() => {
  stopVibrate();
});
</script>

<template>
  <div>
    <p class="title has-text-primary-light my-6">ﮩ٨ـﮩﮩ٨ـﮩﮩ٨ـ</p>
    <!-- <p class="title has-text-primary-light my-6" @click="toggleVibrate">
      {{ isVibrating ? "▐▐" : "▶" }}
    </p> -->
    <!-- <p class="subtitle is-7">ensure you are not on silent</p> -->
    <table
      class="table is-borderless has-background-black has-text-white mx-auto"
    >
      <div class="tbody">
        <tr>
          <td @click="changeCharAt(0, -1)">◭</td>
          <td @click="changeCharAt(1, -1)">◭</td>
          <td @click="changeCharAt(2, -1)">◭</td>
        </tr>
        <tr>
          <td>
            <button class="button">{{ str[0] }}</button>
          </td>
          <td>
            <button class="button">{{ str[1] }}</button>
          </td>
          <td>
            <button class="button">{{ str[2] }}</button>
          </td>
        </tr>
        <tr>
          <td @click="changeCharAt(0, 1)">⧩</td>
          <td @click="changeCharAt(1, 1)">⧩</td>
          <td @click="changeCharAt(2, 1)">⧩</td>
        </tr>
      </div>
    </table>
  </div>
</template>

<style lang="scss" scoped>
td {
  cursor: pointer;
  user-select: none;
}
</style>
../composables/use-completed.composable
