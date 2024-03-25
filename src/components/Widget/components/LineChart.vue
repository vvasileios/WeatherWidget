<template>
  <Loader v-if="loading" :text="'Loading Chart Data'" />
  <div v-else class="min-w-full">
    <apexchart type="line" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>
import Loader from "@shared/Loader.vue";
import { mapGetters } from "vuex";
import VueApexCharts from "vue3-apexcharts";

export default {
  name: "LineChart",

  components: {
    apexchart: VueApexCharts,
    Loader,
  },

  computed: {
    ...mapGetters({
      chartTemperature: "getTemperaturesForChart",
      chartDates: "getDatesForChart",
      loading: "getLoading",
    }),

    chartOptions() {
      return {
        chart: { id: "weather-chart", width: "100%", height: "100%" },
        responsive: [
          {
            breakpoint: 640,
            options: {
              chart: {
                type: "bar",
                width: "100%",
                height: "100%",
                toolbar: {
                  show: false,
                },
              },
              dataLabels: {
                enabled: true,
                offsetX: 1,
                offsetY: -20,
                style: {
                  fontSize: "8px",
                },
              },
              title: {
                text: "Weekly Variation",
                align: "center",
                margin: 5,
                style: {
                  fontSize: "10px",
                },
              },
              yaxis: {
                title: {
                  text: "Temperature",
                  style: {
                    fontSize: "8px",
                  },
                },
              },
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
        dataLabels: {
          enabled: true,
          formatter: (value) => {
            return `${value}°C`;
          },
          offsetX: -3,
          offsetY: -7,
          style: {
            fontSize: "13px",
            colors: ["373D3F"],
          },
          background: {
            enabled: false,
          },
        },
      };
    },

    series() {
      return [
        {
          name: "Temperature",
          data: this.chartTemperature,
          color: "#22C55E",
        },
      ];
    },
  },
};
</script>
