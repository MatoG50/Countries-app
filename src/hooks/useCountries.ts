import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';

export interface Country {
  name: {
    common: string;
  };
  independent: boolean;
  idd: {
    root: string;
    suffixes: string[];
  };
  capital: string[];
  region: string;
  cca2: string;
  population: number;
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
}

const apiClient = new APIClient(`/all/`);

const useCountries = () => {
  return useQuery({
    queryKey: ['countries'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24h
  });
};

export default useCountries;
