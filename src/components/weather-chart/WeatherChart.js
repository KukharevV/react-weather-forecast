import React from "react";
import PropTypes from "prop-types";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";

import { colors } from "../../const/colors";

export const WeatherChart = ({ data }) => {
  return (
    <BarChart width={730} height={250} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="temp" fill={colors.chartBar} />
    </BarChart>
  );
};

WeatherChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string,
      temp: PropTypes.number,
    })
  ).isRequired,
};

export default WeatherChart;
