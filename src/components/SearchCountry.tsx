import { Input } from '@chakra-ui/react';

interface SearchCountryProps {
  setSearchQuery: (query: string) => void;
}

const SearchCountry: React.FC<SearchCountryProps> = ({ setSearchQuery }) => {
  return (
    <Input
      placeholder='Search for a country'
      width='33%'
      onChange={e => setSearchQuery(e.target.value)}
    />
  );
};

export default SearchCountry;
