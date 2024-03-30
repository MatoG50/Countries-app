import {
  Card,
  CardBody,
  Heading,
  Stack,
  Text,
  Image,
  Flex,
} from '@chakra-ui/react';
import useCountries from '../hooks/useCountries';
import { Country } from '../entities/Country';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SkeletonGrid from './SkeletonGrid';

interface CountriesCardProps {
  searchQuery: string;
  selectedRegion: string;
}

const CountriesCard: React.FC<CountriesCardProps> = ({
  searchQuery,
  selectedRegion,
}) => {
  const { data, isLoading, isError } = useCountries();
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);

  //  Filter data
  useEffect(() => {
    if (!isLoading && !isError && data) {
      let filtered: Country[] = data;

      if (searchQuery.trim() !== '') {
        filtered = filtered.filter((country: Country) =>
          country.name.common
            .toLowerCase()
            .includes(searchQuery.trim().toLowerCase())
        );
      }

      if (selectedRegion.trim() !== '') {
        filtered = filtered.filter((country: Country) =>
          country.region
            .toLowerCase()
            .includes(selectedRegion.trim().toLowerCase())
        );
      }

      setFilteredCountries(filtered);
    }
  }, [data, isLoading, isError, searchQuery, selectedRegion]);

  if (isLoading) return <SkeletonGrid />;
  if (isError) return <div>Error fetching data</div>;

  return (
    <>
      <Flex
        flexWrap='wrap'
        width='90%'
        gap='70px'
        marginRight='auto'
        marginLeft='auto'
        justifyContent='space-between'
      >
        {filteredCountries?.map((res: Country) => (
          <Card
            key={res.cca2}
            fontSize={['sm', 'md', 'lg']}
            // maxW='sm'
            padding='0'
            overflow='hidden'
            width='288px'
            height='330px'
            borderRadius='lg'
            ml={{ base: 'auto', md: 0 }} // Margin left set to auto on small screens and 0 on medium screens and above
            mr={{ base: 'auto', md: 0 }}
          >
            <Link to={`/country/${res.cca2}`}>
              <Image
                width='288px'
                height='160px'
                src={res.flags.png}
                alt={res.flags.alt}
              />
              <CardBody>
                <Stack>
                  <Heading size='md'>{res.name.common}</Heading>
                  <Flex alignItems='baseline'>
                    <Text fontWeight='bold'>Population:</Text>
                    <Text ml='2'>{res.population}</Text>
                  </Flex>
                  <Flex alignItems='baseline'>
                    <Text fontWeight='bold'>Region:</Text>
                    <Text ml='2'>{res.region}</Text>
                  </Flex>
                  <Flex alignItems='baseline'>
                    <Text fontWeight='bold'>Capital:</Text>
                    <Text ml='2'>{res.capital}</Text>
                  </Flex>
                </Stack>
              </CardBody>
            </Link>
          </Card>
        ))}
      </Flex>
    </>
  );
};

export default CountriesCard;
