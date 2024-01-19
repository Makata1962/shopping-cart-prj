import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    fullName: '',
    nationalId: '',
    createdAt: '',
}

const customerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers: {
        createCustomer(state, action) {
            state.fullName = action.payload;
        },
    }
})


export const { createCustomer } = customerSlice.actions
export default customerSlice.reducer