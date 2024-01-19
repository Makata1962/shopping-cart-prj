import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Favorites from './pages/Favorites';
import AppLayout from './ui/AppLayout';

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
          element: <ProductList />
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

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
