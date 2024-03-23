<template>
  <div class="">
    <div class="mb-5 flex gap-2">
      <ButtonBase
        :is-Active="currentSelection === 'Now'"
        :text="'Now'"
        @select="handleSelection('Now')"
      />
      <ButtonBase
        :is-Active="currentSelection === 'Today'"
        :text="'Today'"
        @select="handleSelection('Today')"
      />
      <DatePicker />
    </div>
    <div class="mt-10 flex justify-between border-b pb-10">
      <div class="flex flex-col gap-2">
        <p class="text-5xl font-xs">
          {{ roundTemperature(currentWeather.temperature) }}
          <span class="font-light text-4xl">&#176;C</span>
        </p>
        <p class="text-sm text-gray-500">{{ currentWeather.description }}</p>
      </div>
      <div>
        <img src="" alt="" />
      </div>
    </div>

    <div class="grid grid-cols-3 gap-4 mt-5">
      <div class="border rounded-xl py-5 px-3">
        <p class="text-xl font-semibold">
          {{ roundTemperature(currentWeather.feels_like) }} &#176;C
        </p>
        <p class="text-xs text-gray-500">Feels Like</p>
      </div>
      <div class="border rounded-xl py-5 px-3">
        <p class="text-xl font-semibold">
          {{ addDecimal(currentWeather.wind) }}
          <span class="text-sm font-semibold">m/s</span>
        </p>
        <p class="text-xs text-gray-500">Wind</p>
      </div>
      <div class="border rounded-xl py-5 px-3">
        <p class="text-xl font-semibold">
          {{ addDecimal(currentWeather.wind_gust) }}
          <span class="text-sm font-semibold">m/s</span>
        </p>
        <p class="text-xs text-gray-500">Wind Gust</p>
      </div>
      <div class="border rounded-xl py-5 px-3">
        <p class="text-xl font-semibold">{{ currentWeather.wind_deg }}&#176;</p>
        <p class="text-xs text-gray-500">Wind Deg</p>
      </div>
      <div class="border rounded-xl py-5 px-3">
        <p class="text-xl font-semibold">
          {{ currentWeather.humidity }}
          <span class="text-sm font-semibold">%</span>
        </p>
        <p class="text-xs text-gray-500">Humidity</p>
      </div>
      <div class="border rounded-xl py-5 px-3">
        <p class="text-xl font-semibold">
          {{ addDecimal(currentWeather.pressure) }}
          <span class="text-sm font-semibold">hPa</span>
        </p>
        <p class="text-xs text-gray-500">Pressure</p>
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
      currentWeather: "getCurrentWeather",
      currentSelection: "getCurrentSelection",
    }),
  },

  methods: {
    handleSelection(selection) {
      this.$store.dispatch("setCurrentSelection", selection);
    },

    roundTemperature(temp) {
      return Math.round(temp * 2) / 2;
    },

    addDecimal(number) {
      let numStr = number.toString();
      const hasDecimal = numStr.includes(".");

      if (hasDecimal) {
        const decimalIndex = numStr.indexOf(".");
        if (decimalIndex === 1) {
          numStr = numStr.slice(0, 3);
        } else {
          numStr = numStr.slice(0, 1) + "." + numStr.slice(1, 2);
        }
      } else {
        numStr = numStr.slice(0, 1) + "." + numStr.slice(1, 2);
      }

      return parseFloat(numStr);
    },
  },
};
</script>
