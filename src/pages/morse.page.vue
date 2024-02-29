<script setup lang="ts">
import { useVibrate } from "@vueuse/core";
import { onUnmounted, ref } from "vue";

const { vibrate, stop } = useVibrate();
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

  // check answer
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

function toggleVibrate(): void {
  if (isVibrating.value) {
    stopVibrate();
  } else {
    startVibrate();
  }
}

onUnmounted(() => {
  stopVibrate();
});
</script>

<template>
  <div>
    <p class="title has-text-primary-light my-6" @click="toggleVibrate">
      {{ isVibrating ? "▐▐" : "▶" }}
    </p>
    <!-- <p class="subtitle is-7">ensure you are not on silent</p> -->
    <table class="table has-background-black has-text-white mx-auto">
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
