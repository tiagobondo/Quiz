import { StyleSheet, Text, View, StatusBar } from 'react-native';

import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './src/pages/Home';
import About from './src/pages/About';
import Options from './src/pages/Options';
import Playing from './src/pages/Playing';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    
    <NavigationContainer>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'}/>
      <Stack.Navigator>
          <Stack.Screen
            name='Home'
            component={Home}
            options={{
              headerShown:false
            }}
          />

          <Stack.Screen
            name='About'
            component={About}
            options={{
              headerShown:true,
              headerTitle: 'Acerca',
              headerStyle: {
                backgroundColor: '#12a4d9',
              },
              headerTintColor: '#fff'
            }}
          />

          <Stack.Screen
            name='Options'
            component={Options}
            options={{
              headerShown:true,
              headerTitle: 'Opções',
              headerStyle: {
                backgroundColor: '#12a4d9',
              },
              headerTintColor: '#fff'
            }}
          />

          <Stack.Screen
            name='Playing'
            component={Playing}
            options={{
              headerShown:false
            }}
          />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
