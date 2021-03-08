import React, { useState } from "react";
import { Input, Space } from "antd";
import { useDispatch } from "react-redux";
import { getWeatherForCity } from "../../redux/thunks";

const { Search } = Input;

export const SearchInput = () => {
  const dispatch = useDispatch();
  const [cityName, setCityName] = useState("");

  const onCityNameChange = (e) => {
    setCityName(e.target.value);
  };

  const onFetchWeatherClick = async () => {
    dispatch(getWeatherForCity(cityName));
  };

  return (
    <Space direction="vertical" style={{ marginBottom: 20 }}>
      <Search
        placeholder="Type city name"
        enterButton="Search"
        size="large"
        onChange={onCityNameChange}
        onSearch={onFetchWeatherClick}
      />
    </Space>
  );
};
