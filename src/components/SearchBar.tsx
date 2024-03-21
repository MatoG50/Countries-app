import { Input, Select } from '@chakra-ui/react';

const SearchBar = () => {
  return (
    <>
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
