import Image from './common/Image';
import account from '../assets/account.svg';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import LogIn from '../features/auth/LogIn';
import LogOut from '../features/auth/LogOut';
import { useMemo } from 'react';
import { useQueryClient } from '@tanstack/react-query';

function AccountDropdown() {
  const queryClient = useQueryClient();
  const userToken = queryClient.getQueryData(['user']);

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
                    {userToken ? <LogOut /> : <LogIn />}
                  </span>
                ),
                key: 'sign-in',
              },
            ],
          },
        ],
      },
    ],
    [userToken]
  );

  return <Menu mode='horizontal' items={items} />;
}

export default AccountDropdown;
