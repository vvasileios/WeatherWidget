<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import apexchart from "vue3-apexcharts";
import Loader from "@shared/Loader.vue";

const store = useStore();

const chartTemperature = computed(() => store.getters.getTemperaturesForChart);
const chartDates = computed(() => store.getters.getDatesForCharts);
const loading = computed(() => store.getters.getLoading);

const chartOptions = computed(() => {
  return {
    chart: {
      id: "weather-chart",
      width: "100%",
      height: "100%",
    },
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
            labels: {
              formatter: (value) => {
                return `${value}°C`;
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
      categories: chartDates.value,
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
      offsetX: 6,
      offsetY: -6,
      style: {
        fontSize: "13px",
        colors: ["373D3F"],
      },
      background: {
        enabled: false,
      },
    },
  };
});

const series = computed(() => {
  return [
    {
      name: "Temperature",
      data: chartTemperature.value,
      color: "#22C55E",
    },
  ];
});
</script>

<template>
  <Loader v-if="loading" :text="'Loading Chart Data'" />
  <div v-else class="min-w-full mt-20">
    <apexchart type="line" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>
