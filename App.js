import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/homeScreen';
import Navigator from './routes/homeStack';

export default function App() {
  console.log('help;')
  return (
    <Navigator style={styles.container} />
  );
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
