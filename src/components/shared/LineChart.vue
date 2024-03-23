<template>
  <div class="">
    <apexchart type="line" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import VueApexCharts from "vue3-apexcharts";

export default {
  name: "LineChart",

  components: {
    apexchart: VueApexCharts,
  },

  computed: {
    ...mapGetters({
      weeklyWeather: "getWeeklyWeather",
    }),

    chartOptions() {
      return {
        chart: { id: "weather-chart" },
        yaxis: {
          title: {
            text: "Temperature",
          },
        },
        xaxis: this.xAxisFormat(),
        title: {
          text: "Weekly Variation",
          align: "left",
          margin: 10,
          style: {
            fontSize: "15px",
          },
        },
      };
    },

    series() {
      return [{ name: "Temperature", data: this.getTemperatures() }];
    },
  },

  methods: {
    xAxisFormat() {
      const dates = this.weeklyWeather.map((date) => {
        return date.dt;
      });

      const datesWithoutLast = dates.slice(0, -1);

      return {
        categories: datesWithoutLast,
      };
    },

    getTemperatures() {
      const temperatures = this.weeklyWeather.map((dateTemp) => {
        return (dateTemp.temp.day + dateTemp.temp.night) / 2;
      });

      const temperaturesWithoutLast = temperatures.slice(0, -1);

      const roundedTemps = temperaturesWithoutLast.map((temp) => {
        return this.roundTemperature(temp);
      });

      return roundedTemps;
    },

    roundTemperature(temp) {
      return Math.round(temp * 2) / 2;
    },
  },
};
</script>
