import { Flex } from '@chakra-ui/react';
import SkeletonCard from './SkeletonCard';

const SkeletonGrid = () => {
  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  return (
    <>
      <Flex
        flexWrap='wrap'
        width='90%'
        gap='70px'
        marginRight='auto'
        marginLeft='auto'
        justifyContent='space-between'
      >
        {skeletons.map(skeleton => (
          <SkeletonCard key={skeleton} />
        ))}
      </Flex>
    </>
  );
};

export default SkeletonGrid;
