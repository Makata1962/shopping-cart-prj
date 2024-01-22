import Image from './Image';
import Button from './Button';
import account from '../assets/account.svg';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

const items: MenuProps['items'] = [
  {
    key: 'Account',
    icon: <Image src={account} alt='account icon' />,
    children: [
      {
        type: 'group',
        label: (
          <span className='flex justify-center items-center'>Account</span>
        ),
        children: [
          {
            label: (
              <span className='flex justify-center items-center to'>
                <Button type='nav' to='/'>
                  Sign In
                </Button>
              </span>
            ),
            key: 'sign-in',
          },
        ],
      },
    ],
  },
];

function AccountDropdown() {
  // should be added userAuthenticated check,
  //    if not Button needs to change
  return <Menu mode='horizontal' items={items} />;
}

export default AccountDropdown;
