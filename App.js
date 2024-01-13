import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'

import {Router} from './src/routes'

export default function App() {
  return (
    <NavigationContainer>
      <Router/>
    </NavigationContainer>
  );
}
