import React from 'react'
import BottomTabNavigator from './BottomTabNavigator'
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import SignInScreen from '../screens/SignInScreen';
import ReadingScreen from '../screens/ReadingScreen';
import AudioplaylistScreen from '../screens/AudioplaylistScreen';
import TestQuizzScreen from '../screens/TestQuizzScreen';
import TestScreen from '../screens/TestScreen';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
            >   
                {/* <Stack.Screen name="Login" component={LoginScreen}/>
                <Stack.Screen name="SignIn" component={SignInScreen}/> */}
                <Stack.Screen name="Main" component={BottomTabNavigator}/>
                <Stack.Screen name='Reading' component={ReadingScreen}/>
                <Stack.Screen name='Listening' component={AudioplaylistScreen}/>
                <Stack.Screen name='Quizz' component={TestQuizzScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation
