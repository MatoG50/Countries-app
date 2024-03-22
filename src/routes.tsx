import { createBrowserRouter } from 'react-router-dom';
import Layout from './pages/Layout';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import CountryDetailPage from './pages/CountryDetailPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'country/:cca2', element: <CountryDetailPage /> },
    ],
  },
]);

export default router;
