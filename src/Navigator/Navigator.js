import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Details from '../Screen/Details';
import ShopPage from '../Screen/ShopPage';
import Welcome from '../Screen/Welcome';

const Stack = createStackNavigator();

const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen 
                name="Welcome"
                component={Welcome}
                />
                <Stack.Screen 
                name="Shop"
                component={ShopPage}
                />
                <Stack.Screen 
                name="Details"
                component={Details}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator

