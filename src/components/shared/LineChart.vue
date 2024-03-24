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
      chartTemperature: "getTemperaturesForChart",
      chartDates: "getDatesForChart",
    }),

    chartOptions() {
      return {
        chart: { id: "weather-chart" },
        yaxis: {
          title: {
            text: "Temperature",
            style: {
              fontSize: "13px",
            },
          },
        },
        xaxis: {
          categories: this.chartDates,
        },
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
      return [{ name: "Temperature", data: this.chartTemperature }];
    },
  },
};
</script>
