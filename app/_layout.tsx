import React from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import ToastManager from "toastify-react-native";
import store from './store/provider';

export default function RootLayout() {
  return (
    <Provider store={store}>
       <StatusBar style="dark" />
       <ToastManager />
      <Stack
        screenOptions={{
          headerShown: false, // Hide headers globally
        }}
      />
    </Provider>
  );
}
