import React from 'react';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      // initialRouteName='splash' // Update this to 'splash' instead of 'onboarding'
      screenOptions={{
        headerShown: false, // Hide headers globally
      }}
    />
  );
}
