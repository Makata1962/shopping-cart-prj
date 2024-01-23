import { ReactNode, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsername, openModal } from '../slices/customerSlice';
import { useNavigate } from 'react-router-dom';

function ProtectedRoutes({ children }: { children: ReactNode }) {
  const username = useSelector(getUsername);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!username) {
      navigate('/');
      dispatch(openModal(true));
    }
  }, [username, navigate, dispatch]);

  return <div>{children}</div>;
}

export default ProtectedRoutes;
