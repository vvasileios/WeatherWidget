import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state() {
    return {};
  },

  getters: {},

  mutations: {
    SET_WEATHER_DETAILS() {},
  },

  actions: {
    fetchWeatherDetails({ commit }) {
      return new Promise((resolve, reject) => {
        axios
          .get(
            "https://api.openweathermap.org/data/2.5/onecall?lat=40.58725980318928&lon=22.948223362612612&exclude=hourly,minutely&appid=11b0499bd13ab56063de7565a440eb97&units=metric"
          )
          .then((res) => {
            console.log(res.data);
            // commit("SET_WEATHER_DETAILS", res.data);
            resolve(res);
          })
          .catch((e) => {
            reject(e);
          });
      });
    },
  },
});
