import { useState } from 'react';
import CountriesCard from '../components/CountriesCard';
import SearchBar from '../components/SearchBar';
import SearchCountry from '../components/SearchCountry';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <>
      <SearchCountry setSearchQuery={setSearchQuery} />
      <SearchBar />
      <CountriesCard searchQuery={searchQuery} />
    </>
  );
};

export default HomePage;
