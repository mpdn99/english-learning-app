import React, { useEffect, useState } from 'react'
import BottomTabNavigator from './BottomTabNavigator'
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import SignInScreen from '../screens/SignInScreen';
import ReadingScreen from '../screens/ReadingScreen';
import AudioplaylistScreen from '../screens/AudioplaylistScreen';
<<<<<<< HEAD
import auth from '@react-native-firebase/auth';

=======
import TestQuizzScreen from '../screens/TestQuizzScreen';
import TestScreen from '../screens/TestScreen';
>>>>>>> fb791d20900225cea8ef7c86b9fbddc3da9c4c36

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
<<<<<<< HEAD
            >
                {user == null ? (
                    <>
                        <Stack.Screen name="Login" component={LoginScreen} />
                        <Stack.Screen name="SignUp" component={SignInScreen} />
                    </>
                ):(
                    <Stack.Screen name="Main" component={BottomTabNavigator} />
                )}
=======
            >   
                {/* <Stack.Screen name="Login" component={LoginScreen}/>
                <Stack.Screen name="SignIn" component={SignInScreen}/> */}
                <Stack.Screen name="Main" component={BottomTabNavigator}/>
                <Stack.Screen name='Reading' component={ReadingScreen}/>
                <Stack.Screen name='Listening' component={AudioplaylistScreen}/>
                <Stack.Screen name='Quizz' component={TestQuizzScreen}/>
>>>>>>> fb791d20900225cea8ef7c86b9fbddc3da9c4c36
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation
