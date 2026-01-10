import React from 'react';
import { registerRootComponent } from 'expo';
import { AuthProvider } from './app/src/context/AuthContext';
import AppNavigator from './app/src/navigation/AppNavigator';

 function App() {
  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
}

export default registerRootComponent(App);