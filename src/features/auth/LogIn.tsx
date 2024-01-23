import { Button, Modal } from 'antd';
import Image from '../../ui/Image';
import { ChangeEvent, useState } from 'react';
import { Input } from 'antd';
import hanger from '../../assets/modal-icon.png';
import { userLogIn } from '../../services/apiProducts';
import { useDispatch } from 'react-redux';
import { createCustomer } from '../../slices/customerSlice';

const customTitle = (
  <div className='flex flex-col justify-center items-center text-4xl font-medium text-white mb-10'>
    <Image src={hanger} alt='hanger icon' />
    <p>Welcome to CLOSET</p>
  </div>
);

function LogIn() {
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const showModal = () => {
    setOpen(true);
  };
  const handleOk = async () => {
    const token = await userLogIn(username, password);
    if (token) {
      dispatch(createCustomer({ username, token }));
    }
    setOpen(false);
    setUsername('');
    setPassword('');
  };

  const handleCancel = () => {
    setOpen(false);
    setUsername('');
    setPassword('');
  };

  const onUsernameChangeHandler = (evt: ChangeEvent<HTMLInputElement>) =>
    setUsername(evt.target.value);

  const onPasswordChangeHandler = (evt: ChangeEvent<HTMLInputElement>) =>
    setPassword(evt.target.value);

  return (
    <div>
      <Button type='default' onClick={showModal}>
        Log In
      </Button>
      <Modal
        className='login-modal'
        open={open}
        title={customTitle}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key='submit' type='primary' onClick={handleOk}>
            Login
          </Button>,
        ]}
      >
        <div className='flex flex-col justify-center items-center w-[350px]'>
          <div className='w-full'>
            <span className='text-white'>Email</span>
            <Input
              value={username}
              className='mb-10'
              onChange={onUsernameChangeHandler}
            />
          </div>
          <div className='w-full'>
            <span className='text-white'>Password</span>
            <Input
              value={password}
              type='password'
              className='mb-12'
              onChange={onPasswordChangeHandler}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default LogIn;
