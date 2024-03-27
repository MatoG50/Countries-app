import { Select } from '@chakra-ui/react';

export interface SearchCountryProps {
  setSelectedRegion: (query: string) => void;
}

const SearchRegion: React.FC<SearchCountryProps> = ({ setSelectedRegion }) => {
  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

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
          {regions.map((res: string) => (
            <option key={res}>{res}</option>
          ))}
        </Select>
      </div>
    </>
  );
};

export default SearchRegion;
