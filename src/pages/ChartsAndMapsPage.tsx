import React from "react";
import { useWorldData, useCountryData } from "api";
import { LineGraph, Map } from "components";

const Dashboard: React.FC = () => {
  const worldDataQuery = useWorldData();
  const countryDataQuery = useCountryData();

  if (worldDataQuery.isLoading || countryDataQuery.isLoading)
    return <div>Loading...</div>;

  if (worldDataQuery.isError || countryDataQuery.isError)
    return <div>Error fetching data</div>;

  return (
    <div className="flex flex-col items-center w-full h-full">
      <h1 className="text-lg font-cursive py-4">COVID-19 Dashboard</h1>
      <div className="flex gap-4 w-full h-fit">
        <div className="flex-1 w-3/6 h-full">
          <LineGraph data={worldDataQuery.data} />
        </div>
        <div className="flex-1 w-3/6 h-full">
          <Map countries={countryDataQuery.data} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
