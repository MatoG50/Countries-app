import { Link, useParams } from 'react-router-dom';
import useCountry from '../hooks/useCountry';
import {
  Image,
  Heading,
  Text,
  Box,
  Card,
  Button,
  HStack,
} from '@chakra-ui/react';
import { IoIosArrowRoundBack } from 'react-icons/io';

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
      <div className='main-container'>
        <Link to='/'>
          <Button size='sm' className='link'>
            {' '}
            <IoIosArrowRoundBack style={{ marginRight: '5px' }} /> Back
          </Button>
        </Link>
        <div className='detail-container'>
          <Card className='detailCard' padding='0'>
            <Image
              className='imgDetail'
              src={data[0].flags.png}
              alt={data[0].flags.alt}
            />
          </Card>
          <div className='text-details'>
            <div className='name-details'>
              {' '}
              <Heading> {data[0].name.common}</Heading>
              <Text>
                Native Name:{' '}
                <span>{data[0].name.nativeName.eng?.official}</span>
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
              <HStack className='border'>
                {data[0].borders && <Text>Border countries: </Text>}
                {data[0].borders &&
                  data[0].borders.map((border: string) => (
                    <Box borderRadius='md' key={border}>
                      {border}
                    </Box>
                  ))}
              </HStack>
            </div>
            <div className='curr-details'>
              {' '}
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
                Languages:{' '}
                <span> {Object.values(data[0].languages).join(', ')}</span>
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryDetailPage;
