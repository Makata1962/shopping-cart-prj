import { Outlet } from 'react-router-dom';
import CartOverview from '../features/cart/CartOverview';
import Footer from './Footer';
import Header from './Header';

function AppLayout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
        <CartOverview />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
