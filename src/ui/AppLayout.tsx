import { Outlet } from 'react-router-dom';
import CartOverview from '../features/cart/CartOverview';
import Footer from './Footer';
import Header from './Header';

function AppLayout() {
  return (
    <div className='mx-auto text-center overflow-x-hidden'>
      <div className='mx-auto flex flex-col justify-center items-center'>
        <Header />
        <main>
          <Outlet />
          <CartOverview />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default AppLayout;
