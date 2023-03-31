import { createBrowserRouter, Navigate } from 'react-router-dom';

import { ROUTE } from '../constants/route';
import Layout from './Layout';
import Home from '../pages/Home';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: ROUTE.HOME,
        element: <Home />,
      },
      {
        path: ROUTE.CART,
        element: <div />,
      },
      { path: ROUTE.ORDER, element: <div /> },
      {
        path: ROUTE.ORDER_DETAIL(),
        element: <div />,
      },
      {
        path: ROUTE.ORDER_PAYMENT(),
        element: <div />,
      },
    ],
  },
]);

export default router;
