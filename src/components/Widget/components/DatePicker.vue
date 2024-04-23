<script setup>
import { ref, computed, watch } from "vue";
import { useStore } from "vuex";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

const store = useStore();

const selectedDate = ref(store.state.selectedDate);
const dates = computed(() => store.getters.getDatesForPicker);
const minDate = computed(() => getDate("min"));
const maxDate = computed(() => getDate());

const getDate = (value) => {
  if (!dates.value || dates.value.length === 0) return null;

  if (value === "min") return dates.value[0];

  return dates.value[1];
};

const clearDate = () => {
  store.commit("SET_INITIAL_DATE");
};

watch(selectedDate, (newValue) => {
  store.commit("SET_SELECTED_DATE", newValue);
});
</script>

<template>
  <vue-date-picker
    class="md:w-40"
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
