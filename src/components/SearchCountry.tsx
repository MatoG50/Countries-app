import { Input } from '@chakra-ui/react';

export interface SearchCountryProps {
  setSearchQuery: (query: string) => void;
}

const SearchCountry: React.FC<SearchCountryProps> = ({ setSearchQuery }) => {
  return (
    <Input
      placeholder='Search for a country'
      width='400px'
      onChange={e => setSearchQuery(e.target.value)}
    />
  );
};

export default SearchCountry;
