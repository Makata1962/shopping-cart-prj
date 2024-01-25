import { Modal } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../../slices/customerSlice';
import Button from '../../ui/common/Button';

function LogOut() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    dispatch(logOut());
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button type='dropdown' onClick={showModal}>
        Log Out
      </Button>
      <Modal
        className='login-modal'
        open={open}
        title='Are you sure you want to log out?'
        // onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key='submit' type='primary' onClick={handleOk}>
            Logout
          </Button>,
        ]}
      >
        <div className='flex flex-col justify-center items-center w-[350px]'>
          {/* <div className='w-full'>
            <span className='text-white'>Password</span>
            <Input
              value={password}
              type='password'
              className='mb-12'
              onChange={onPasswordChangeHandler}
            />
          </div> */}
        </div>
      </Modal>
    </div>
  );
}

export default LogOut;
