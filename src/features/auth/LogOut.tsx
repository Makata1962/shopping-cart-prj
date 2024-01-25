import toast from 'react-hot-toast';
import Button from '../../ui/common/Button';
import { useQueryClient } from '@tanstack/react-query';
import { useLocation, useNavigate } from 'react-router-dom';

function LogOut() {
  const queryClient = useQueryClient();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleLogOut = () => {
    queryClient.setQueryData(['user'], null);
    if (pathname === '/cart') {
      navigate('/');
    }
    toast.success('Logged Out');
  };

  return (
    <>
      <Button type='dropdown' onClick={handleLogOut}>
        Log Out
      </Button>
    </>
  );
}

export default LogOut;
