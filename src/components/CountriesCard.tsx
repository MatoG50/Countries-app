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

  if (isLoading) return <div style={{ textAlign: 'center' }}>isLoading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <>
      <div className='cards'>
        {filteredCountries?.map((res: Country) => (
          <Card
            key={res.cca2}
            // maxW='sm'
            className='card'
            padding='0'
            borderRadius='lg'
          >
            <Link to={`/country/${res.cca2}`}>
              <Image
                src={res.flags.png}
                alt={res.flags.alt}
                className='image'
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
      </div>
    </>
  );
};

export default CountriesCard;
