import { useQuery } from 'react-query';

const API_BASE = 'https://disease.sh/v3/covid-19';

export const useWorldData = () => {
    return useQuery('worldData', async () => {
        const response = await fetch(`${API_BASE}/all`);
        const data = await response.json();
        return data;
    });
};

export const useCountryData = () => {
    return useQuery('countryData', async () => {
        const response = await fetch(`${API_BASE}/countries`);
        const data = await response.json();
        return data;
    });
};

export const useGraphData = () => {
    return useQuery('graphData', async () => {
        const response = await fetch(`${API_BASE}/historical/all?lastdays=all`);
        const data = await response.json();
        return data;
    });
};
