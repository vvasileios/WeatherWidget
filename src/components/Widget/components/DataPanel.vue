<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import ButtonBase from "@shared/ButtonBase.vue";
import Loader from "@shared/Loader.vue";
import DatePicker from "./DatePicker.vue";

const store = useStore();
const weatherData = computed(() => store.getters.getWeatherData);
const currentSelection = computed(() => store.getters.currentSelection);
const selectedDate = computed(() => store.getters.selectedDate);
const loading = computed(() => store.getters.getLoading);

const handleSelection = (selection) => {
  dispatch("setCurrentSelection", selection);
};

const changeUnitStyle = (item) => {
  return item === "Feels Like" || item === "Wind Deg"
    ? "text-sm sm:text-xl"
    : "text-sm";
};
</script>

<template>
  <Loader v-if="loading" :text="'Loading Panel Data'" />
  <div v-else class="mb-20">
    <div class="mb-5 flex gap-1 sm:gap-2">
      <ButtonBase
        :is-Active="currentSelection === 'Now' && !selectedDate"
        :is-date-selected="!!selectedDate"
        :text="'Now'"
        @select="handleSelection('Now')"
      />
      <ButtonBase
        :is-Active="currentSelection === 'Today' && !selectedDate"
        :is-date-selected="!!selectedDate"
        :text="'Today'"
        @select="handleSelection('Today')"
      />
      <DatePicker />
    </div>
    <div class="flex justify-between items-center border-b-4 pb-6 mt-6">
      <div class="flex flex-col gap-2">
        <p class="text-3xl sm:text-5xl font-normal">
          {{ weatherData[0].value }}
          <span class="text-3xl sm:text-5xl font-normal">{{
            weatherData[0].unit
          }}</span>
        </p>
        <p class="text-xs sm:text-sm text-gray-500">
          {{ weatherData[0].description }}
        </p>
      </div>
      <div class="w-24 h-24">
        <img
          :src="`https://openweathermap.org/img/w/${weatherData[0].icon}.png`"
          class="w-full h-full"
          alt="Weather Icon"
        />
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-5">
      <div
        class="border rounded-xl py-5 px-3 flex flex-col sm:items-start justify-center items-center"
        v-for="(item, index) in weatherData.slice(1)"
        :key="index"
      >
        <p class="text-sm sm:text-xl font-semibold">
          {{ item.value }}
          <span
            :class="changeUnitStyle(item.description)"
            class="font-semibold"
          >
            {{ item.unit }}
          </span>
        </p>
        <p class="text-xs text-gray-500">{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>
