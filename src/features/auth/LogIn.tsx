import { Modal } from 'antd';
import Image from '../../ui/common/Image';
import { ChangeEvent, useContext, useState } from 'react';
import { Input } from 'antd';
import hanger from '../../assets/modal-icon.png';
import Button from '../../ui/common/Button';
import Spinner from '../../ui/Spinner';
import Error from '../../ui/common/Error';
import useLogin from '../../hooks/useLogin';
import { ModalContext } from '../../context/ModalContext';

const customTitle = (
  <div className='flex flex-col justify-center items-center text-4xl font-medium text-white mb-10'>
    <Image src={hanger} alt='hanger icon' />
    <p>Welcome to CLOSET</p>
  </div>
);

function LogIn() {
  const { isModalOpen, setIsModalOpen } = useContext(ModalContext);

  const [username, setUsername] = useState('mor_2314');
  const [password, setPassword] = useState('83r5^_');
  const { mutate: login, isLoading, error } = useLogin();

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = async () => {
    login({ username, password });
    setIsModalOpen(false);
    setUsername('');
    setPassword('');
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setUsername('');
    setPassword('');
  };

  const onUsernameChangeHandler = (evt: ChangeEvent<HTMLInputElement>) =>
    setUsername(evt.target.value);

  const onPasswordChangeHandler = (evt: ChangeEvent<HTMLInputElement>) =>
    setPassword(evt.target.value);

  if (isLoading) return <Spinner />;
  if (error) return <Error message={error as string} />;

  return (
    <div>
      <Button type='dropdown' onClick={showModal}>
        Log In
      </Button>
      <Modal
        className='login-modal'
        open={isModalOpen}
        title={customTitle}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key='submit' type='confirm' onClick={handleOk}>
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
