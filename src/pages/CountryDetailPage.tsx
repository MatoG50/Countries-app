import { Link, useParams } from 'react-router-dom';
import useCountry from '../hooks/useCountry';
import { Image, Heading, Text, Box, Card, Flex } from '@chakra-ui/react';
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
      <div style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto' }}>
        <Link to='/'>
          <Flex
            alignItems='center'
            justifyContent='space-between'
            paddingLeft='25px'
            paddingRight='25px'
            borderRadius='md'
            boxShadow='md'
            marginBottom='30px'
            w='108px'
            h='36px'
          >
            <IoIosArrowRoundBack />
            Back
          </Flex>
        </Link>
        <div className='column'>
          <div className='left-side'>
            <Card
              padding='0'
              marginRight='30px'
              width={{ base: '100%', md: '350px', lg: '500px' }}
              height={{ base: 'auto', md: '240px', lg: '350px' }}
            >
              <Image
                width={{ base: '100%', md: '350px', lg: '500px' }}
                height={{ base: 'auto', md: '240px', lg: '350px' }}
                borderRadius='md'
                src={data[0].flags.png}
                alt={data[0].flags.alt}
              />
            </Card>{' '}
          </div>
          <div className='right-side'>
            <Heading className='txt' marginBottom='40px'>
              {' '}
              {data[0].name.common}
            </Heading>
            <div className='left-container'>
              <div className='left-sideName'>
                <Flex alignItems='baseline'>
                  <Text fontWeight='bold'>Native Name:</Text>
                  <Text ml='2'>
                    {
                      data[0].name.nativeName[
                        Object.keys(data[0].name.nativeName)[0]
                      ].common
                    }
                  </Text>
                </Flex>
                <Flex alignItems='baseline'>
                  <Text fontWeight='bold'>Population:</Text>
                  <Text ml='2'>{data[0].population}</Text>
                </Flex>
                <Flex alignItems='baseline'>
                  <Text fontWeight='bold'>Region:</Text>
                  <Text ml='2'>{data[0].region}</Text>
                </Flex>
                <Flex alignItems='baseline'>
                  <Text fontWeight='bold'>Sub Region:</Text>
                  <Text ml='2'>{data[0].subregion}</Text>
                </Flex>
                <Flex alignItems='baseline'>
                  <Text fontWeight='bold'>Capital:</Text>
                  <Text ml='2'>{data[0].capital}</Text>
                </Flex>
              </div>
              <div className='right-sideName'>
                <Flex alignItems='baseline'>
                  <Text fontWeight='bold'>Top Level Domain:</Text>
                  <Text ml='2'>{data[0].demonyms.eng?.m}</Text>
                </Flex>
                <Flex alignItems='baseline'>
                  <Text fontWeight='bold'>Currencies:</Text>
                  <Text ml='2'>
                    {
                      data[0].currencies[Object.keys(data[0].currencies)[0]]
                        .name
                    }
                  </Text>
                </Flex>
                <Flex alignItems='baseline'>
                  <Text fontWeight='bold'>Languages:</Text>
                  <Text ml='2'>
                    {Object.values(data[0].languages).join(', ')}
                  </Text>
                </Flex>
              </div>
            </div>

            <Flex marginTop='40px'>
              {data[0].borders && (
                <Text fontWeight='bold'>Border countries: </Text>
              )}
              <Flex ml='4' flexWrap='wrap' gap='10px'>
                {data[0].borders &&
                  data[0].borders.map((border: string) => (
                    <Box
                      borderRadius='md'
                      key={border}
                      boxShadow='md'
                      w='78px'
                      h='36px'
                      paddingTop='5px'
                      paddingBottom='5px'
                      paddingLeft='20px'
                      paddingRight='20px'
                    >
                      {border}
                    </Box>
                  ))}
              </Flex>
            </Flex>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryDetailPage;
