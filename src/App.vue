<template>
  <div
    class="flex flex-col gap-6 items-center justify-center w-screen min-h-screen text-gray-700 p-10 bg-gradient-to-br from-orange-300 via-indigo-200 to-indigo-400 select-none"
  >
    <WeatherWidget />
  </div>
</template>

<script>
import WeatherWidget from "./components/WeatherWidget.vue";
export default {
  name: "App",

  components: {
    WeatherWidget,
  },
};
</script>
