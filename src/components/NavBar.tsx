import { Text } from '@chakra-ui/react';
import { IoMoonOutline } from 'react-icons/io5';
// import { IoMoonSharp } from 'react-icons/io5';

const NavBar = () => {
  return (
    <>
      <div className='header'>
        <Text>Where in the world?</Text>
        <div className='mode'>
          <IoMoonOutline />
          {/* <IoMoonSharp /> */}
          <span className='color-mode'>Dark Mode</span>
        </div>
      </div>
    </>
  );
};

export default NavBar;
