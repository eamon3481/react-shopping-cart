import { Outlet } from 'react-router-dom';
import Header from '../pages/Header';

const Layout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

export default Layout;
