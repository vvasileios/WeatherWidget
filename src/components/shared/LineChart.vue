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
        responsive: [
          {
            breakpoint: 1000,
            options: {
              chart: {
                type: "bar",
              },
              plotOptions: {
                bar: {
                  horizontal: true,
                },
              },
              yaxis: {},
            },
          },
        ],
        yaxis: {
          title: {
            text: "Temperature",
            style: {
              fontSize: "13px",
            },
          },
          labels: {
            formatter: (value) => {
              return `${value}°C`;
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
        markers: {
          size: 7,
        },
      };
    },

    series() {
      return [
        { name: "Temperature", data: this.chartTemperature, color: "#22C55E" },
      ];
    },
  },
};
</script>
