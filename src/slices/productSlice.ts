import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favoriteProducts: [],
  cartProducts: [],
  totalPrice: 0,
  isLoading: false,
  error: '',
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
      state.error = '';
    },
    addToCart: (state, { payload }) => {
      const existingProductIndex = state.cartProducts.findIndex(item => item.id === payload.id);

      if (existingProductIndex !== -1) {
        state.cartProducts[existingProductIndex].quantity += payload.quantity;
      } else {
        state.cartProducts.push(payload);
      }
    },
    deleteFromCart: (state, { payload }) => {
      state.cartProducts = state.cartProducts.filter(
        (product) => product.id !== payload
      );
    },
    updateProductQuantity: (state, { payload }) => {
      const index = state.cartProducts.findIndex(product => product.id === payload.id);
      if (index !== -1) {
        state.cartProducts[index].quantity += payload.productQuantity;
      }
    },
    addToFavorite: (state, { payload }) => {
      state.favoriteProducts.push(payload);
    },
    deleteFromFavorite: (state, { payload }) => {
      state.favoriteProducts = state.favoriteProducts.filter(
        (product) => product.id !== payload
      );
    },
  },
});

export const { addToCart, deleteFromCart, updateProductQuantity, addToFavorite, deleteFromFavorite } =
  productSlice.actions;

// used thunk to demonstrate .... ?? delete it

// export function deposit(amount, currency) {
//     if (currency === 'USD') return { type: 'account/deposit', payload: amount };

//     return async function (dispatch, getState) {
//         dispatch({ type: 'account/convertingCurrency' });

//         const res = await fetch(
//             `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
//         );
//         const data = await res.json();
//         const converted = data.rates.USD;

//         dispatch({ type: 'account/deposit', payload: converted });
//     };
// }

export const getCartProducts = (state) => {
  return state.product.cartProducts;
};


export default productSlice.reducer;
