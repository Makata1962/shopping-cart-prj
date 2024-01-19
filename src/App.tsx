import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import ProductList from './pages/ProductList'; 
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Favorites from './pages/Favorites';
import AppLayout from './ui/AppLayout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />
        },
        { 
          path: '/product-list',
          element: <ProductList />,
        },
        {
          path: '/product-list/:productId',
          element: <ProductDetails />
        },
        {
          path: '/cart',
          element: <Cart />
        },
        {
          path:'/favorites',
          element: <Favorites />
        }
    ]
  },
])

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60* 1000,
    }
  }
})

function App() {
  
  return (
    <QueryClientProvider client={queryClient}>
     <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App;
function useSelector() {
  throw new Error('Function not implemented.');
}

function getCartProducts(): any {
  throw new Error('Function not implemented.');
}

