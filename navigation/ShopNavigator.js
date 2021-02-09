import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Colors from '../src/constants/Colors';
import ProductsOverviewScreen from '../src/screens/shop/ProductsOverviewScreen';
import ProductDetails from '../src/screens/shop/ProductDetails';

const Stack = createStackNavigator();


export default () => {
  return (
    <Stack.Navigator creenOptions={{
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
  }}>
      <Stack.Screen name='All products' component={ProductsOverviewScreen} />
      <Stack.Screen name="Prod" component={ProductDetails} />
    </Stack.Navigator>
  )
};