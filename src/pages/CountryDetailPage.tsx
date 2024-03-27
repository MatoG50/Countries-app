import { Link, useParams } from 'react-router-dom';
import useCountry from '../hooks/useCountry';
import { Image, Heading, Text, Box } from '@chakra-ui/react';

const CountryDetailPage = () => {
  const { cca2 } = useParams();
  const { data, isLoading, isError } = useCountry(cca2!);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !data) {
    return <div>Error fetching country data</div>;
  }

  return (
    <>
      <Link to='/'>Go Back</Link>
      <Image src={data[0].flags.png} alt={data[0].flags.alt} />
      <Heading> {data[0].name.common}</Heading>
      <Text>
        Native Name: <span>{data[0].name.nativeName.eng?.official}</span>
      </Text>
      <Text>
        Population: <span>{data[0].population}</span>
      </Text>
      <Text>
        Region: <span>{data[0].region}</span>
      </Text>
      <Text>
        Sub Region: <span>{data[0].subregion}</span>
      </Text>
      <Text>
        Capital: <span>{data[0].capital}</span>
      </Text>
      <Text>
        Tope Level Domain: <span>{data[0].demonyms.eng?.m}</span>
      </Text>
      <Text>
        Currencies:{' '}
        <span>
          {data[0].currencies[Object.keys(data[0].currencies)[0]].name}
        </span>
      </Text>
      <Text>
        Languages: <span> {Object.values(data[0].languages).join(', ')}</span>
      </Text>
      <div className='border-countries'>
        {data[0].borders && <Text>Border countries</Text>}
        {data[0].borders &&
          data[0].borders.map((border: string) => (
            <Box key={border}>{border}</Box>
          ))}
      </div>
    </>
  );
};

export default CountryDetailPage;
