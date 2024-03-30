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
      <Select
        placeholder='Filter by Region'
        width='200px'
        onChange={handleRegionChange}
      >
        {regions.map((res: string) => (
          <option key={res}>{res}</option>
        ))}
      </Select>
    </>
  );
};

export default SearchRegion;
