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

  data() {
    return {
      chartOptions: {
        chart: { id: "weather-chart" },
        yaxis: {
          title: {
            text: "Temperature",
          },
        },
        xaxis: {
          categories: this.xAxisFormat(),
        },
        title: {
          text: "Weekly Variation",
          align: "left",
          margin: 10,
          style: {
            fontSize: "15px",
          },
        },
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 35, 50, 49, 60, 70, 91],
        },
      ],
    };
  },

  computed: {
    ...mapGetters({
      weeklyWeather: "getWeeklyWeather",
    }),
  },

  methods: {
    xAxisFormat() {
      console.log(this.weeklyWeather);
      // return this.weeklyWeather.map((date) => {
      //   return date.dt;
      // });
    },
  },
};
</script>
