import { Input, Select, Text } from '@chakra-ui/react';
import { IoMoonOutline } from 'react-icons/io5';
// import { IoMoonSharp } from 'react-icons/io5';

const SearchBar = () => {
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
      <div className='search-items'>
        <Input placeholder='Filter by Region' width='33%' />
        <Select placeholder='Select option' width='14%'>
          <option value='option1'>Option 1</option>
          <option value='option2'>Option 2</option>
          <option value='option3'>Option 3</option>
        </Select>
      </div>
    </>
  );
};

export default SearchBar;
