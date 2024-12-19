import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './index'; // Assuming you have a root reducer


// Configure the store
const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production', // Enables Redux DevTools only in development
});

export default store;