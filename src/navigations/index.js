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
import ForgotPassScreen from '../screens/ForgotPassScreen';
import ChangeProfileScreen from '../screens/ChangeProfileScreen';
import ListTestScreen from '../screens/ListTestScreen';
import AboutScreen from '../screens/AboutScreen';
import ContactScreen from '../screens/ContactScreen';
import ResultScreen from '../screens/ResultScreen';
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
                        <Stack.Screen name="ForgotPass" component={ForgotPassScreen} />
                    </>
                ):(
                    <>
                        <Stack.Screen name="Main" component={BottomTabNavigator}/>
                        <Stack.Screen name="ListTest" component={ListTestScreen}/>
                        <Stack.Screen name="Listening" component={AudioplaylistScreen}/>
                        <Stack.Screen name="Reading" component={ReadingScreen}/>
                        <Stack.Screen name="Setting" component={SettingScreen}/>
                        <Stack.Screen name="EditProfile" component={ChangeProfileScreen} />
                        <Stack.Screen name="About" component={AboutScreen}/>
                        <Stack.Screen name="Contact" component={ContactScreen}/>
                        <Stack.Screen name="Result" component={ResultScreen}/>
                    </>

                )} 
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation
