import { Outlet } from 'react-router-dom';
import CartOverview from '../features/cart/CartOverview';
import Footer from './Footer';
import Header from './Header';

function AppLayout() {
  return (
    <div className='mx-auto text-center'>
      <Header />
      <main className='px-10'>
        <Outlet />
        <CartOverview />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
