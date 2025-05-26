import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './components/HomePage';
import TestPage from './components/TestPage';
import Tips from './components/Tips';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'testirovanie', element: <TestPage /> },
      { path: 'tips', element: <Tips /> }
    ]
  }
]);