import { createStore } from "vuex";
import moment from "moment";
import {
  transformCurrentWeather,
  transformDailyWeather,
} from "/src/utils/index";
import axios from "axios";

export default createStore({
  state() {
    return {
      weatherData: [],
      weatherWeek: [],
      currentSelection: "Now",
      selectedDate: null,
      loading: true,
    };
  },

  getters: {
    getWeatherData: (state) => {
      if (state.selectedDate) {
        const selectedDateData = state.weatherWeek.filter((day) => {
          return (
            moment(day[0].dt).format("DD/MM") ===
            moment(state.selectedDate).format("DD/MM")
          );
        });

        const weatherData = selectedDateData[0].slice(1);

        return weatherData;
      }

      if (state.currentSelection === "Now") {
        return state.weatherData;
      } else if (state.currentSelection === "Today") {
        const removeDate = state.weatherWeek[0].slice(1);

        return removeDate;
      }
    },

    getWeeklyWeather: (state) => {
      return state.weatherWeek;
    },

    getCurrentSelection: (state) => state.currentSelection,

    getDatesForChart: (state) => {
      return state.weatherWeek.map((day) => {
        return moment(day[0].dt).format("DD/MM");
      });
    },

    getTemperaturesForChart: (state) => {
      return state.weatherWeek.map((day) => {
        return day[0].maxTemp;
      });
    },

    getSelectedDate: (state) => state.selectedDate,

    getDatesForPicker: (state) => {
      if (state.weatherWeek.length > 0) {
        const firstDate = state.weatherWeek[0][0].dt;
        const lastIndex = state.weatherWeek.length - 1;
        const lastDate = state.weatherWeek[lastIndex][0].dt;

        return [
          moment(firstDate).format("MM/DD/YY"),
          moment(lastDate).format("MM/DD/YY"),
        ];
      }
      return [];
    },

    getLoading: (state) => {
      return state.loading;
    },
  },

  mutations: {
    SET_LOADING(state, payload) {
      state.loading = payload;
    },

    SET_WEATHER_DATA(state, payload) {
      state.weatherData = payload;
    },

    SET_WEATHER_WEEK(state, payload) {
      state.weatherWeek = payload;
    },

    SET_CURRENT_SELECTION(state, payload) {
      state.selectedDate = null;
      state.currentSelection = payload;
    },

    SET_SELECTED_DATE(state, payload) {
      state.selectedDate = payload;
    },

    SET_INITIAL_DATE(state) {
      state.selectedDate = null;
      state.currentSelection = "Now";
    },
  },

  actions: {
    fetchWeatherDetails({ commit }) {
      commit("SET_LOADING", true);
      return new Promise((resolve, reject) => {
        axios
          .get(
            "https://api.openweathermap.org/data/2.5/onecall?lat=40.58725980318928&lon=22.948223362612612&exclude=hourly,minutely&appid=11b0499bd13ab56063de7565a440eb97&units=metric"
          )
          .then((res) => {
            commit(
              "SET_WEATHER_DATA",
              transformCurrentWeather(res.data.current)
            );
            commit("SET_WEATHER_WEEK", transformDailyWeather(res.data.daily));
            commit("SET_LOADING", false);
            resolve(res);
          })
          .catch((e) => {
            reject(e);
          });
      });
    },

    setCurrentSelection({ commit }, selection) {
      commit("SET_CURRENT_SELECTION", selection);
    },
  },
});
