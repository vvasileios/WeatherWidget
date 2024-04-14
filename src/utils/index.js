import moment from "moment";

function roundNumber(num) {
  return Math.round(num);
}

export function transformCurrentWeather(data) {
  return [
    {
      value: roundNumber(data.temp),
      unit: "°C",
      description: `${data.weather[0].main} - ${data.weather[0].description}`,
      icon: data.weather[0].icon,
    },
    {
      value: roundNumber(data.feels_like),
      unit: "°C",
      description: "Feels Like",
    },
    {
      value: data.wind_speed,
      unit: "m/s",
      description: "Wind",
    },
    {
      value: data.wind_gust || 0,
      unit: "m/s",
      description: "Wind Gust",
    },
    { value: data.wind_deg, unit: "°", description: "Wind Deg" },
    { value: data.humidity, unit: "%", description: "Humidity" },
    {
      value: data.pressure,
      unit: "hPa",
      description: "Pressure",
    },
  ];
}

export function transformDailyWeather(data) {
  const sevenDaysWeek = data.slice(0, -1);

  return sevenDaysWeek.map((day) => {
    return [
      {
        dt: moment.unix(day.dt).toISOString(),
        maxTemp: roundNumber(day.temp.max),
      },
      {
        value: roundNumber((day.temp.day + day.temp.night) / 2),
        unit: "°C",
        description: `${day.weather[0].main} - ${day.weather[0].description}`,
        icon: day.weather[0].icon,
      },
      {
        value: roundNumber((day.feels_like.day + day.feels_like.night) / 2),
        unit: "°C",
        description: "Feels Like",
      },
      {
        value: day.wind_speed,
        unit: "m/s",
        description: "Wind",
      },
      {
        value: day.wind_gust || 0,
        unit: "m/s",
        description: "Wind Gust",
      },
      { value: day.wind_deg, unit: "°", description: "Wind Deg" },
      { value: day.humidity, unit: "%", description: "Humidity" },
      {
        value: day.pressure,
        unit: "hPa",
        description: "Pressure",
      },
    ];
  });
}
