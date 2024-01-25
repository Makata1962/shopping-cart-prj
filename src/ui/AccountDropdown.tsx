import Image from './Image';
import Button from './Button';
import account from '../assets/account.svg';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import LogIn from '../features/auth/LogIn';
import { getUsername } from '../slices/customerSlice';
import { useSelector } from 'react-redux';
import LogOut from '../features/auth/LogOut';
import { useMemo } from 'react';

function AccountDropdown() {
  const username = useSelector(getUsername);
  console.log(username);

  const items: MenuProps['items'] = useMemo(
    () => [
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
                      {username ? <LogOut /> : <LogIn />}
                    </Button>
                  </span>
                ),
                key: 'sign-in',
              },
            ],
          },
        ],
      },
    ],
    [username]
  );

  return <Menu mode='horizontal' items={items} />;
}

export default AccountDropdown;
