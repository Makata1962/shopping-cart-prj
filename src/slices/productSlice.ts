import { createSlice } from '@reduxjs/toolkit';
import { ProductState } from '../utils/interfaces';

const initialState: ProductState = {
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
    clearCart: (state) => {
      state.cartProducts = []
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

export const { addToCart, deleteFromCart, clearCart, updateProductQuantity, addToFavorite, deleteFromFavorite } =
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

export const getCartProducts = (state: { product: ProductState }) => {
  return state.product.cartProducts;
};

export const getFavoriteProduct = (state: { product: ProductState }, id: number) => {
  return state.product.favoriteProducts.some(product => product.id === id);
};

export const getFavoriteProducts = (state: { product: ProductState }) => {
  return state.product.favoriteProducts;
};

export const getTotalPrice = (state: { product: ProductState }) => {
  return state.product.cartProducts.reduce((acc, cur) => acc + (cur.price * (cur.quantity || 1)), 0);
};



export default productSlice.reducer;
