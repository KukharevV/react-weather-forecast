import { getWeatherByCityName } from "../api/getWeatherByCityName";
import { formatWeather } from "../helpers/formatWeather";
import { setError, setWeather } from "./actions";

export const getWeatherForCity = (cityName) => {
  return async (dispatch) => {
    try {
      const { data } = await getWeatherByCityName(cityName);
      const weatherTempArray = formatWeather(data.list);
      dispatch(setWeather(data.city.name, weatherTempArray));
    } catch (err) {
      dispatch(setError(err?.response?.data?.message));
    }
  };
};
