import { Outlet } from 'react-router-dom';
import { Footer, Header } from '../../components';

const OutletLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default OutletLayout;
