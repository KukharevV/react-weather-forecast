import React from "react";
import { useSelector } from "react-redux";
import { Alert, Typography } from "antd";
import Layout, { Content, Header } from "antd/lib/layout/layout";

import { SearchInput } from "./components/search-input";
import { WeatherChart } from "./components/weather-chart";

import { colors } from "./const/colors";

import "antd/dist/antd.css";

const { Title } = Typography;

function App() {
  const { cityName, cityTempForecast, error } = useSelector((state) => state);

  return (
    <Layout>
      <Header>
        <Title style={{ color: colors.white }}>
          Search weather forecast by city name
        </Title>
      </Header>
      <Layout>
        <Content style={{ padding: 24, minHeight: 433 }}>
          <SearchInput />
          {cityName && <Title level={2}>City: {cityName}</Title>}
          {error.hasError ? (
            <Alert
              message="Error"
              description={error.message}
              type="error"
              showIcon
            />
          ) : (
            cityTempForecast && <WeatherChart data={cityTempForecast} />
          )}
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
