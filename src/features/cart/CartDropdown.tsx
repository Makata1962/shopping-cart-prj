import Image from '../../ui/common/Image';
import Button from '../../ui/common/Button';
import { useSelector } from 'react-redux';
import { getCartProducts } from '../../slices/productSlice';
import cart from '../../assets/cart.svg';
import { titleChecker } from '../../utils/helpers';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { CardProps } from '../../utils/interfaces';
function CartDropDown() {
  const products = useSelector(getCartProducts);

  const productItems = products.map((product: CardProps, index: number) => ({
    label: (
      <Button to='/cart' type='nav'>
        <div className='flex items-center'>
          <Image
            src={product.image}
            alt={product.title}
            className='w-8 h-8 mr-10'
          />
          <div>
            <span>{titleChecker(product.title, 20)} </span>
            <span>${product.price * (product.quantity || 1)}</span>
            <span> x{product.quantity} </span>
          </div>
        </div>
      </Button>
    ),
    key: `${index}`, // Ensure key is a string
  }));

  // Additional menu items
  const additionalMenuItems = [
    {
      label: (
        <span className='flex justify-center items-center'>
          <Button to='/cart' type='nav'>
            CHECKOUT
          </Button>
        </span>
      ),
      key: 'Go to checkout',
    },
  ];

  // Concatenate productItems with additional items
  const menuItems = productItems.concat(additionalMenuItems);

  const items: MenuProps['items'] = [
    {
      key: 'CartDropdown',
      icon: <Image src={cart} alt='cart icon' />,
      children: [
        {
          type: 'group',
          label: (
            <span className='flex justify-center items-center'>Products</span>
          ),
          children: menuItems,
        },
      ],
    },
  ];

  return <Menu mode='horizontal' items={items} />;
}

export default CartDropDown;
