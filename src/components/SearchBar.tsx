import { Text } from '@chakra-ui/react';
import { IoMoonOutline } from 'react-icons/io5';
import { IoMoonSharp } from 'react-icons/io5';

const SearchBar = () => {
  return (
    <div className='header'>
      <Text>Where in the world?</Text>
      <div className='mode'>
        <IoMoonOutline />
        <IoMoonSharp />
      </div>
    </div>
  );
};

export default SearchBar;
