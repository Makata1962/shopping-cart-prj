import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Favorites from './pages/Favorites';
import AppLayout from './ui/AppLayout';
import RouterError from './ui/RouterError';

import { productLoader } from './utils/helpers';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Products from './pages/Products';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <RouterError />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/product-list',
        element: <Products />,
        loader: productLoader,
      },
      {
        path: '/product-list/:productId',
        element: <ProductDetails />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/favorites',
        element: <Favorites />,
      },
    ],
  },
]);
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
