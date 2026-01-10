import React, { useContext } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { AuthContext } from '../context/AuthContext';
import AuthStack from './AuthStack';
import TabNavigator from './TabNavigator';

export default function AppNavigator() {
  const auth = useContext(AuthContext);

  if (auth?.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#769FCD" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {auth?.userToken !== null ? (
        <TabNavigator />
      ) : (
        <AuthStack />
      )}
    </NavigationContainer>
  );
}