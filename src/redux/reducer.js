import { SET_ERROR, SET_WEATHER } from "./actions";

const initialState = {
  cityName: "",
  cityTempForecast: null,
  error: {
    hasError: false,
    message: "",
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WEATHER: {
      return {
        ...state,
        error: {
          hasError: false,
          message: "",
        },
        cityName: action.payload.cityName,
        cityTempForecast: action.payload.cityTempForecast,
      };
    }

    case SET_ERROR: {
      return {
        ...state,
        cityName: "",
        cityTempForecast: null,
        error: {
          hasError: true,
          message: action.payload.message || "Some error has occurred",
        },
      };
    }

    default:
      return state ?? initialState;
  }
};

export default rootReducer;
