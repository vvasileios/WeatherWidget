import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state() {
    return {
      currentWeather: {
        temperature: "",
        description: "",
        feels_like: "",
        wind: "",
        wind_gust: "",
        wind_deg: "",
        humidity: "",
        pressure: "",
      },
      weatherToday: {
        temperature: "",
        description: "",
        feels_like: "",
        wind: "",
        wind_gust: "",
        wind_deg: "",
        humidity: "",
        pressure: "",
      },
      weatherWeek: {},
      currentSelection: "Now",
    };
  },

  getters: {
    getCurrentWeather: (state) => {
      if (state.currentSelection === "Now") {
        return state.currentWeather;
      } else if (state.currentSelection === "Today") {
        return state.weatherToday;
      }
    },

    getDailyWeather: (state) => state.dailyWeather,

    getCurrentSelection: (state) => state.currentSelection,
  },

  mutations: {
    SET_WEATHER_CURRENT(state, payload) {
      state.currentWeather.temperature = payload.temp;
      state.currentWeather.description = payload.weather[0].description;
      state.currentWeather.feels_like = payload.feels_like;
      state.currentWeather.wind = payload.wind_speed;
      state.currentWeather.wind_gust = payload.wind_gust || 0;
      state.currentWeather.wind_deg = payload.wind_deg;
      state.currentWeather.humidity = payload.humidity;
      state.currentWeather.pressure = payload.pressure;
    },

    SET_WEATHER_DAILY(state, payload) {
      const dayTemp = payload[0]?.temp?.day ?? 0;
      const nightTemp = payload[0]?.temp?.night ?? 0;

      state.weatherToday.temperature = (dayTemp + nightTemp) / 2;

      state.weatherToday.description = payload[0]?.weather[0]?.description;

      const dayFeel = payload[0]?.feels_like?.day ?? 0;
      const nightFeel = payload[0]?.feels_like?.night ?? 0;

      state.weatherToday.feels_like = (dayFeel + nightFeel) / 2;
      state.weatherToday.wind = payload[0]?.wind_speed;
      state.weatherToday.wind_gust = payload[0]?.wind_gust || 0;
      state.weatherToday.wind_deg = payload[0]?.wind_deg;
      state.weatherToday.humidity = payload[0]?.humidity;
      state.weatherToday.pressure = payload[0]?.pressure;

      delete payload[0];

      state.weatherWeek = payload;
    },

    SET_CURRENT_SELECTION(state, payload) {
      state.currentSelection = payload;
    },
  },

  actions: {
    fetchWeatherDetails({ commit }) {
      return new Promise((resolve, reject) => {
        axios
          .get(
            "https://api.openweathermap.org/data/2.5/onecall?lat=40.58725980318928&lon=22.948223362612612&exclude=hourly,minutely&appid=11b0499bd13ab56063de7565a440eb97&units=metric"
          )
          .then((res) => {
            commit("SET_WEATHER_CURRENT", res.data.current);
            commit("SET_WEATHER_DAILY", res.data.daily);
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
