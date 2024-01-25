import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Provider } from 'react-redux';
import store from './store';
import { CategoriesProvider } from './context/CategoriesContext.tsx';
import { ModalProvider } from './context/ModalContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <CategoriesProvider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </CategoriesProvider>
    </Provider>
  </React.StrictMode>
);
