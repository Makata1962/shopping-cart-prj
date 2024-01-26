import { useMutation, useQueryClient } from '@tanstack/react-query';
import { userLogIn } from '../services/apiProducts';
import toast from 'react-hot-toast';

function useLogin() {
    const queryClient = useQueryClient();

    const mutation = useMutation(
        ({ username, password }: { username: string, password: string }) => userLogIn(username, password),
        {
            onSuccess: (user) => {
                queryClient.setQueryData(['user'], user.token);
                toast.success('Login successful');
            },
            onError: (error) => {
                toast.error('Your username or password is incorrect');
                console.error('Login failed:', error);
            },
        }
    );

    return mutation;
}

export default useLogin;
