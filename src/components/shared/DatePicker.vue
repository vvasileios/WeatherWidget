<template>
  <vue-date-picker
    class="w-40"
    v-model="selectedDate"
    :enable-time-picker="false"
    :min-date="minDate"
    :max-date="maxDate"
    :start-date="minDate"
    auto-apply
    placeholder="Select Date"
    @cleared="clearDate"
  ></vue-date-picker>
</template>

<script>
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

export default {
  name: "DatePicker",

  components: {
    VueDatePicker,
  },
};
</script>
