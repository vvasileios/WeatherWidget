<script setup>
import { onMounted } from "vue";
import { useStore } from "vuex";
import WeatherWidget from "./components/Widget/WeatherWidget.vue";

const store = useStore();

onMounted(() => {
  store.dispatch("fetchWeatherDetails");
});
</script>

<template>
  <div
    class="flex flex-col gap-4 items-center justify-center w-screen min-h-screen text-gray-700 p-10 bg-gradient-to-br from-orange-300 via-indigo-200 to-indigo-400 select-none"
  >
    <WeatherWidget />
  </div>
</template>
