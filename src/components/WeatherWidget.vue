<template>
  <content-box> </content-box>
  <content-box>
    <LineChart />
  </content-box>
</template>

<script>
import ContentBox from "./shared/ContentBox.vue";
import LineChart from "./shared/LineChart.vue";

export default {
  name: "WeatherWidget",

  components: {
    ContentBox,
    LineChart,
  },
};
</script>
