import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

interface LineGraphProps {
  data: any; // data format here
}

const LineGraph: React.FC<LineGraphProps> = ({ data }) => {
  // Format data for chart.js
  const chartData = {
    labels: Object.keys(data.cases),
    datasets: [
      {
        label: "Cases",
        data: Object.values(data.cases),
        borderColor: "rgba(75,192,192,1)",
        fill: false,
      },
    ],
  };

  return (
    <Line
      data={chartData}
      width={'100%'}
      height={'100%'}
    />
  );
};

export default LineGraph;
