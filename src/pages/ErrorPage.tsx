import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import { Text } from '@chakra-ui/react';
import NavBar from '../components/NavBar';

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <Text>
        {isRouteErrorResponse(error)
          ? 'This page does not exist'
          : ' An unexpected error occurred.'}
      </Text>
    </>
  );
};

export default ErrorPage;
