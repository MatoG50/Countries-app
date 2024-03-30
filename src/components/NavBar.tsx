import { Flex, Text } from '@chakra-ui/react';
import ColorModeSwitch from './ColorModeSwitch';

const NavBar = () => {
  return (
    <>
      <Flex
        boxShadow='md'
        maxW='100%'
        fontWeight='bold'
        height='60px'
        marginBottom='30px'
        justifyContent='space-between'
        alignItems='center'
        paddingRight='40px'
        paddingLeft='30px'
        fontSize={['sm', 'md', 'lg']}
      >
        <Text className='htext'>Where in the world?</Text>
        <ColorModeSwitch />
      </Flex>
    </>
  );
};

export default NavBar;
