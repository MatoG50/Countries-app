import { useState } from 'react';
import CountriesCard from '../components/CountriesCard';
import SearchCountry from '../components/SearchCountry';
import SearchRegion from '../components/SearchRegion';
import { Flex } from '@chakra-ui/react';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');

  return (
    <>
      <Flex
        width='90%'
        justifyContent='space-between'
        flexWrap='wrap'
        gap='20px'
        margin='auto'
        marginBottom='30px'
        fontSize={['sm', 'md', 'lg']}
      >
        <SearchCountry setSearchQuery={setSearchQuery} />
        <SearchRegion setSelectedRegion={setSelectedRegion} />
      </Flex>
      <CountriesCard
        searchQuery={searchQuery}
        selectedRegion={selectedRegion}
      />
    </>
  );
};

export default HomePage;
