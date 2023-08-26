export interface CountryData {
    country: string;
    countryInfo: {
        lat: number;
        long: number;
    };
    active: number;
    recovered: number;
    deaths: number;
}

export interface GraphData {
    timeline: {
        cases: Record<string, number>;
        deaths: Record<string, number>;
        recovered: Record<string, number>;
    };
}
