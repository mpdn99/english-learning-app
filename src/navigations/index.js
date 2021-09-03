import React, { useEffect, useState } from 'react'
import BottomTabNavigator from './BottomTabNavigator'
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ReadingScreen from '../screens/ReadingScreen';
import AudioplaylistScreen from '../screens/AudioplaylistScreen';
import auth from '@react-native-firebase/auth';

import TestQuizzScreen from '../screens/TestQuizzScreen';
import TestScreen from '../screens/TestScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingScreen from '../components/SettingScreen';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
     // Set an initializing state whilst Firebase connects
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    // Handle user state changes
    const onAuthStateChanged = (user) => {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    if (initializing) return null;
    return (
        <NavigationContainer>
            <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
            >
                {user == null ? (
                    <>
                        <Stack.Screen name="Login" component={LoginScreen} />
                        <Stack.Screen name="SignUp" component={SignUpScreen} />
                    </>
                ):(
                    <>
                    <Stack.Screen name="Main" component={BottomTabNavigator}/>
                    <Stack.Screen name="Listening" component={AudioplaylistScreen}/>
                    <Stack.Screen name="Reading" component={ReadingScreen}/>
                    <Stack.Screen name="Setting" component={SettingScreen}/>
                    </>

                )} 
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation
