<template>
  <content-box class="rounded-t-lg">
    <DataPanel />
  </content-box>
  <content-box class="rounded-b-lg">
    <LineChart />
  </content-box>
</template>

<script>
import ContentBox from "@shared/ContentBox.vue";
import DataPanel from "./components/DataPanel.vue";
import LineChart from "./components/LineChart.vue";

export default {
  name: "WeatherWidget",

  components: {
    ContentBox,
    LineChart,
    DataPanel,
  },
};
</script>
