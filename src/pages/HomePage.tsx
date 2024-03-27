import { useState } from 'react';
import CountriesCard from '../components/CountriesCard';
import SearchCountry from '../components/SearchCountry';
import SearchRegion from '../components/SearchRegion';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');

  return (
    <>
      <div className='search-items'>
        <SearchCountry setSearchQuery={setSearchQuery} />
        <SearchRegion setSelectedRegion={setSelectedRegion} />
      </div>
      <CountriesCard
        searchQuery={searchQuery}
        selectedRegion={selectedRegion}
      />
    </>
  );
};

export default HomePage;
