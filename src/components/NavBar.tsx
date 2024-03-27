import { Text } from '@chakra-ui/react';
import ColorModeSwitch from './ColorModeSwitch';

const NavBar = () => {
  return (
    <>
      <div className='header'>
        <Text>Where in the world?</Text>
        <ColorModeSwitch />
      </div>
    </>
  );
};

export default NavBar;
