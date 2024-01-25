import toast from 'react-hot-toast';
import Button from '../../ui/common/Button';
import { useQueryClient } from '@tanstack/react-query';

function LogOut() {
  const queryClient = useQueryClient();

  const handleLogOut = () => {
    queryClient.setQueryData(['user'], null);
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
