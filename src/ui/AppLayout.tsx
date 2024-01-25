import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import { Toaster } from 'react-hot-toast';

function AppLayout() {
  return (
    <div className='mx-auto text-center overflow-x-hidden'>
      <div className='mx-auto flex flex-col justify-center items-center'>
        <Header />
        <Toaster position='top-center' />
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default AppLayout;
