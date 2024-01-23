import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    username: '',
    token: '',
    isModalOpen: false,
}

const customerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers: {
        createCustomer(state, { payload }) {
            state.username = payload.username;
            state.token = payload.token;
        },
        openModal(state, { payload }) {
            state.isModalOpen = payload;
        },
        closeModal(state, { payload }) {
            state.isModalOpen = payload;
        }
    }
})


export const { createCustomer, openModal, closeModal } = customerSlice.actions

export const getUsername = (state) => state.customer.username;
export const getModal = (state) => state.customer.isModalOpen;


export default customerSlice.reducer