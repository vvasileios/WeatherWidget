import moment from "moment";

function roundNumber(num) {
  return Math.round(num * 2) / 2;
}

function formatDate(unixTimestamp) {
  return moment.unix(unixTimestamp).toISOString();
}

function addDecimal(number) {
  let numStr = number.toString();
  const hasDecimal = numStr.includes(".");

  if (hasDecimal) {
    const decimalIndex = numStr.indexOf(".");
    if (decimalIndex === 1) {
      numStr = numStr.slice(0, 3);
    } else {
      numStr = numStr.slice(0, 1) + "." + numStr.slice(1, 2);
    }
  } else {
    numStr = numStr.slice(0, 1) + "." + numStr.slice(1, 2);
  }

  return parseFloat(numStr);
}

export function transformCurrentWeather(data) {
  return [
    {
      value: roundNumber(data.temp),
      unit: "°C",
      description: data.weather[0].description,
      icon: data.weather[0].icon,
    },
    {
      value: roundNumber(data.feels_like),
      unit: "°C",
      description: "Feels Like",
    },
    {
      value: addDecimal(data.wind_speed),
      unit: "m/s",
      description: "Wind",
    },
    {
      value: addDecimal(data.wind_gust || 0),
      unit: "m/s",
      description: "Wind Gust",
    },
    { value: data.wind_deg, unit: "°", description: "Wind Deg" },
    { value: data.humidity, unit: "%", description: "Humidity" },
    {
      value: addDecimal(data.pressure),
      unit: "hPa",
      description: "Pressure",
    },
  ];
}

export function transformDailyWeather(data) {
  const sevenDaysWeek = data.slice(0, -1);

  return sevenDaysWeek.map((day) => {
    return [
      { dt: moment.unix(day.dt).toISOString() },
      {
        value: roundNumber((day.temp.day + day.temp.night) / 2),
        unit: "°C",
        description: day.weather[0].description,
        icon: day.weather[0].icon,
      },
      {
        value: roundNumber((day.feels_like.day + day.feels_like.night) / 2),
        unit: "°C",
        description: "Feels Like",
      },
      {
        value: addDecimal(day.wind_speed),
        unit: "m/s",
        description: "Wind",
      },
      {
        value: addDecimal(day.wind_gust || 0),
        unit: "m/s",
        description: "Wind Gust",
      },
      { value: day.wind_deg, unit: "°", description: "Wind Deg" },
      { value: day.humidity, unit: "%", description: "Humidity" },
      {
        value: addDecimal(day.pressure),
        unit: "hPa",
        description: "Pressure",
      },
    ];
  });
}
