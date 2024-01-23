import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    username: '',
    token: '',
}

const customerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers: {
        createCustomer(state, { payload }) {
            state.username = payload.username;
            state.token = payload.token;
        },
    }
})


export const { createCustomer } = customerSlice.actions

export const getUsername = (state) => {
    return state.customer.username;
};

export default customerSlice.reducer