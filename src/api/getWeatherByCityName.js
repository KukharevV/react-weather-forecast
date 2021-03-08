import axios from "axios";

const defaultParams = {
  units: "metric",
  cnt: 7,
  appid: "bad46dfee1ae1125ec4faf31e63449de",
};

export const getWeatherByCityName = (cityName) => {
  return axios.get(`http://api.openweathermap.org/data/2.5/forecast?`, {
    params: {
      q: cityName,
      ...defaultParams,
    },
  });
};
