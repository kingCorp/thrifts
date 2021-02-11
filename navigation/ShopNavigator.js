import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Colors from '../src/constants/Colors';
import ProductsOverviewScreen from '../src/screens/shop/ProductsOverviewScreen';
import ProductDetails from '../src/screens/shop/ProductDetails';

const Stack = createStackNavigator();


export default () => {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
        fontFamily: 'open-sans-bold',
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
  }}>
      <Stack.Screen name='Allproducts' component={ProductsOverviewScreen} options={{ title: 'All Products' }} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} options={({ route }) => ({ title: route.params.title })}/>
    </Stack.Navigator>
  )
};