import { Select } from '@chakra-ui/react';
import useCountries from '../hooks/useCountries';
import { Country } from '../entities/Country';

export interface SearchCountryProps {
  setSelectedRegion: (query: string) => void;
}

const SearchRegion: React.FC<SearchCountryProps> = ({ setSelectedRegion }) => {
  const { data } = useCountries();

  const handleRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedRegion = event.target.value;
    setSelectedRegion(selectedRegion);
  };

  return (
    <>
      <div className='search-items'>
        <Select
          placeholder='Filter by Region'
          width='14%'
          onChange={handleRegionChange}
        >
          {data?.map((res: Country) => (
            <option key={res.cca2}>{res.region}</option>
          ))}
        </Select>
      </div>
    </>
  );
};

export default SearchRegion;
