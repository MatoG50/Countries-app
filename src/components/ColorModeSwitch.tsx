import { HStack, Text, useColorMode } from '@chakra-ui/react';
import { IoMoonOutline, IoMoonSharp } from 'react-icons/io5';

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack onClick={toggleColorMode} className='switch'>
      {colorMode === 'dark' ? <IoMoonOutline /> : <IoMoonSharp />}
      {colorMode === 'dark' ? <Text>Light Mode</Text> : <Text>Dark Mode</Text>}
    </HStack>
  );
};

export default ColorModeSwitch;
