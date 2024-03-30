import { Card, Skeleton, SkeletonText } from '@chakra-ui/react';

const SkeletonCard = () => {
  return (
    <>
      <Card
        height='330px'
        marginBottom='20px'
        borderRadius='5px'
        padding='20px'
      >
        <Skeleton width='288px' height='330px' />
        <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
      </Card>
    </>
  );
};

export default SkeletonCard;
