import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { IoSearch } from 'react-icons/io5';

export interface SearchCountryProps {
  setSearchQuery: (query: string) => void;
}

const SearchCountry: React.FC<SearchCountryProps> = ({ setSearchQuery }) => {
  return (
    <InputGroup width='400px'>
      <InputLeftElement pointerEvents='none'>
        <IoSearch color='gray.300' />
      </InputLeftElement>
      <Input
        placeholder='Search for a country...'
        onChange={e => setSearchQuery(e.target.value)}
      />
    </InputGroup>
  );
};

export default SearchCountry;
