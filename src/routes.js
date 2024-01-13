import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './pages/Home'
import Playing from './pages/Playing'
import About from './pages/About';
import Options from './pages/Options';

const Stack = createNativeStackNavigator();

export default function Router(){
  return(
    <Stack.Navigator>

      <Stack.Screen 
      name='Home' 
      component={Home}
      options={{
        headerShown:false,
      }}
      />

      <Stack.Screen 
      name='Playing' 
      component={Playing}
      options={{
        headerShown:false
      }}
      />

      <Stack.Screen 
      name='About' 
      component={About}
      options={{
        headerShown:false        
      }}
      />

      <Stack.Screen 
      name='Options' 
      component={Options}
      options={{
        headerShown:false
      }}
      />
  
    </Stack.Navigator>
  )}

  export {Router}