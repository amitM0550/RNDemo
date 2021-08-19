import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigationRoutes from './constants/NavigationRoutes';
import ListingScreen from './module/ListingScreen';
import DetailScreen from './module/DetailScreen';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={NavigationRoutes.ListingScreen}>
                <Stack.Screen name={NavigationRoutes.ListingScreen} component={ListingScreen} />
                <Stack.Screen name={NavigationRoutes.DetailScreen} component={DetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigation;