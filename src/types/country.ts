export interface Country {
  id: string;
  name: string;
  capital: string;
  population: number;
  area: number;
  areaUnit: string;
  currency: {
    code: string;
    name: string;
  };
  flagEmoji: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  timeZone: string;
  callingCode: string;
} 