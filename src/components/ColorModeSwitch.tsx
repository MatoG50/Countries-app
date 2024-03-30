import { HStack, Text, useColorMode } from '@chakra-ui/react';
import { IoMoonSharp } from 'react-icons/io5';

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack onClick={toggleColorMode} cursor='pointer'>
      {colorMode === 'dark' ? (
        <IoMoonSharp style={{ color: 'white' }} />
      ) : (
        <IoMoonSharp />
      )}
      {colorMode === 'dark' ? <Text>Light Mode</Text> : <Text>Dark Mode</Text>}
    </HStack>
  );
};

export default ColorModeSwitch;
