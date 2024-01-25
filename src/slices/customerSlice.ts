import { createSlice } from '@reduxjs/toolkit';
import { CustomerState } from '../utils/interfaces';

const initialState: CustomerState = {
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
        logOut(state) {
            state.username = '';
            state.token = ''
        },
        openModal(state) {
            state.isModalOpen = true;
        },
        closeModal(state) {
            state.isModalOpen = false;
        }
    }
})


export const { createCustomer, logOut, openModal, closeModal } = customerSlice.actions

export const getUsername = (state: { customer: CustomerState }) => state.customer.username;
export const getModal = (state: { customer: CustomerState }) => state.customer.isModalOpen;


export default customerSlice.reducer