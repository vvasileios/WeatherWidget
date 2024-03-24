<template>
  <!-- Display loading message or spinner when data is being fetched -->
  <div v-if="loading">Loading weather data...</div>
  <div v-else>
    <div class="mb-5 flex gap-2">
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
        <p class="text-5xl font-normal">
          {{ weatherData[0].value }}
          <span class="font-normal text-5xl">{{ weatherData[0].unit }}</span>
        </p>
        <p class="text-sm text-gray-500">{{ weatherData[0].description }}</p>
      </div>
      <div class="w-24 h-24">
        <img
          :src="`https://openweathermap.org/img/w/${weatherData[0].icon}.png`"
          class="w-full h-full"
          alt="Weather Icon"
        />
      </div>
    </div>

    <div class="grid grid-cols-3 gap-4 mt-5">
      <div
        class="border rounded-xl py-5 px-3"
        v-for="(item, index) in weatherData.slice(1)"
        :key="index"
      >
        <p class="text-xl font-semibold">
          {{ item.value }}
          <span class="text-sm font-semibold">{{ item.unit }}</span>
        </p>
        <p class="text-xs text-gray-500">{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ButtonBase from "./ButtonBase.vue";
import DatePicker from "./DatePicker.vue";

export default {
  name: "DataPanel",

  components: {
    ButtonBase,
    DatePicker,
  },

  computed: {
    ...mapGetters({
      weatherData: "getWeatherData",
      currentSelection: "getCurrentSelection",
      selectedDate: "getSelectedDate",
      loading: "getLoading",
    }),
  },

  methods: {
    handleSelection(selection) {
      this.$store.dispatch("setCurrentSelection", selection);
    },
  },
};
</script>
