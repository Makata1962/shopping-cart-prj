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
        openModal(state) {
            state.isModalOpen = true;
        },
        closeModal(state) {
            state.isModalOpen = false;
        }
    }
})


export const { createCustomer, openModal, closeModal } = customerSlice.actions

export const getUsername = (state) => state.customer.username;
export const getModal = (state) => state.customer.isModalOpen;


export default customerSlice.reducer