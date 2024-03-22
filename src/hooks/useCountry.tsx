import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';

const apiClient = new APIClient('/alpha?codes=');

const useCountry = (cca2: string) =>
  useQuery({
    queryKey: ['country', cca2],
    queryFn: () => apiClient.get(cca2),
  });

export default useCountry;
