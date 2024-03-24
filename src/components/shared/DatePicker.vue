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
import { mapGetters } from "vuex";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

export default {
  name: "DatePicker",

  components: {
    VueDatePicker,
  },

  computed: {
    ...mapGetters({
      dates: "getDatesForPicker",
    }),

    selectedDate: {
      get() {
        return this.$store.state.selectedDate;
      },
      set(value) {
        this.$store.commit("SET_SELECTED_DATE", value);
      },
    },

    minDate() {
      return this.getDate("min");
    },

    maxDate() {
      return this.getDate();
    },
  },

  methods: {
    getDate(value) {
      if (!this.dates || this.dates.length === 0) return null;

      if (value === "min") {
        return this.dates[0];
      }
      return this.dates[1];
    },

    clearDate() {
      this.$store.commit("");
    },
  },
};
</script>
