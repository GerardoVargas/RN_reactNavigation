import 'react-native-gesture-handler';

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import Inicio from './views/Inicio'
import Nosotros from './views/Nosotros'

//RN
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Inicio"
        >
          <Stack.Screen 
              name='Inicio'
              component={Inicio}
          />
          <Stack.Screen 
              name='Nosotros'
              component={Nosotros}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
