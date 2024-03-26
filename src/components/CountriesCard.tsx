import { Card, CardBody, Heading, Stack, Text, Image } from '@chakra-ui/react';
import useCountries from '../hooks/useCountries';
import { Country } from '../entities/Country';
import { Link } from 'react-router-dom';

interface CountriesCardProps {
  searchQuery: string;
}

const CountriesCard: React.FC<CountriesCardProps> = ({ searchQuery }) => {
  const { data, isLoading, isError } = useCountries();
  if (isLoading) return <div style={{ textAlign: 'center' }}>isLoading...</div>;
  if (isError) return <div>Error fetching data</div>;

  // Filter countries
  const filteredCountries = data?.filter((country: Country) =>
    country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
              <CardBody backgroundColor='white'>
                <Stack>
                  <Heading color='black' size='md'>
                    {res.name.common}
                  </Heading>
                  <Text color='black'>
                    Population: <span>{res.population}</span>
                  </Text>
                  <Text color='black'>
                    Region: <span>{res.region}</span>
                  </Text>
                  <Text color='black'>
                    Capital: <span>{res.capital}</span>
                  </Text>
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
