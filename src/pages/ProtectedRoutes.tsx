import { ReactNode, useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import { ModalContext } from '../context/ModalContext';

function ProtectedRoutes({ children }: { children: ReactNode }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const userToken = queryClient.getQueryData(['user']);
  const { setIsModalOpen } = useContext(ModalContext);

  useEffect(() => {
    if (!userToken) {
      navigate('/');
      setIsModalOpen(true);
    }
  }, [navigate, dispatch, userToken, setIsModalOpen]);

  return children;
}

export default ProtectedRoutes;
