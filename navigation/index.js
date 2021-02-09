import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ShopNavigator from './ShopNavigator';

const Stack = createStackNavigator();

const Navigation = props => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
            headerShown: false,
          }}>
                <Stack.Screen name="Shop" component={ShopNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};


export default Navigation;