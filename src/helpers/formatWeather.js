export const formatWeather = (weatherArray) => {
  return weatherArray.map((item) => {
    return { date: item.dt_txt, temp: item.main.temp };
  });
};
