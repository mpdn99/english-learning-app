import React from 'react'
import BottomTabNavigator from './BottomTabNavigator'
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import SignInScreen from '../screens/SignInScreen';
import ReadingScreen from '../screens/ReadingScreen';
import AudioplaylistScreen from '../screens/AudioplaylistScreen';
import TestQuizzScreen from '../screens/TestQuizzScreen';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
            >
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="SignIn" component={SignInScreen} />
                <Stack.Screen name="Main" component={BottomTabNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation
