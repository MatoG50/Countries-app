import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';

const apiClient = new APIClient(`/all`);

const useCountries = () => {
  return useQuery({
    queryKey: ['countries'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24h
  });
};

export default useCountries;
