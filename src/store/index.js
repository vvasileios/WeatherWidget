import { createStore } from "vuex";
import moment from "moment";
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
      weatherWeek: [],
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

    getWeeklyWeather: (state) => {
      console.log(state.weatherWeek);
      return state.weatherWeek;
    },

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
      const dayTemp = payload?.temp?.day;
      const nightTemp = payload?.temp?.night;

      state.weatherToday.temperature = (dayTemp + nightTemp) / 2;

      state.weatherToday.description = payload?.weather[0]?.description;

      const dayFeel = payload?.feels_like?.day;
      const nightFeel = payload?.feels_like?.night;

      state.weatherToday.feels_like = (dayFeel + nightFeel) / 2;
      state.weatherToday.wind = payload?.wind_speed;
      state.weatherToday.wind_gust = payload?.wind_gust || 0;
      state.weatherToday.wind_deg = payload?.wind_deg;
      state.weatherToday.humidity = payload?.humidity;
      state.weatherToday.pressure = payload?.pressure;
    },

    SET_WEATHER_WEEK(state, payload) {
      state.weatherWeek = payload.map((date) => {
        moment.unix(date.dt).format("DD/MM");
      });
      console.log(payload);
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
            commit("SET_WEATHER_DAILY", res.data.daily[0]);
            commit("SET_WEATHER_WEEK", res.data.daily);
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
