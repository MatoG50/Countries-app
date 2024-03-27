import { Container, Text } from '@chakra-ui/react';
import ColorModeSwitch from './ColorModeSwitch';

const NavBar = () => {
  return (
    <>
      <Container boxShadow='md' maxW='100%' className='header'>
        <Text className='htext'>Where in the world?</Text>
        <ColorModeSwitch />
      </Container>
    </>
  );
};

export default NavBar;
