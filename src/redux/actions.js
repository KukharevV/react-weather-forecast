export const SET_WEATHER = "set-weather";
export const SET_ERROR = "set-error";

export const setWeather = (cityName, cityTempForecast) => ({
  type: SET_WEATHER,
  payload: {
    cityName,
    cityTempForecast,
  },
});

export const setError = (errorMessage) => ({
  type: SET_ERROR,
  payload: {
    message: errorMessage,
  },
});
