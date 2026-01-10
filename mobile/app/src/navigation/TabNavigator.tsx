import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { AuthContext } from '../context/AuthContext';

const HomeScreen = () => {
  const auth = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text>Dobrodošao u EmotionAlly!</Text>
      <Button title="Odjavi se" onPress={() => auth?.logout()} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});

export default function TabNavigator() {
  return <HomeScreen />;
}