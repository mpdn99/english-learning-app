import React from 'react'

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from '../screens/HomeScreen';
import CourseScreen from '../screens/CourseScreen';
import TestScreen from '../screens/TestScreen';
import TestQuizzScreen from '../screens/TestQuizzScreen';

import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
            activeTintColor: '#157cdb',
            inactiveTintColor: '#262626',
            style:{
                borderTopStartRadius: 20,
                borderTopEndRadius: 20,
                height: 60,
                position:'absolute'
            },
            headerShown:false
            }}>
            <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
                tabBarVisible: 'false',
                tabBarLabel: 'Home',
                tabBarIcon: ({color}) => (
                <MaterialIcons name="home" size={26} color={color} />
                ),
            }}
            />
            <Tab.Screen
            name="Test"
            component={TestScreen}
            options={{
                tabBarVisible: 'false',
                tabBarLabel: 'Tests',
                tabBarIcon: ({color}) => (
                <MaterialIcons name="assignment" size={26} color={color} />
                ),
            }}
            />
            <Tab.Screen
            name="Course"
            component={CourseScreen}
            options={{
                tabBarVisible: 'false',
                tabBarLabel: 'Courses',
                tabBarIcon: ({color}) => (
                <MaterialIcons name="class" size={26} color={color} />
                ),
            }}
            />
            <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
                tabBarVisible: 'false',
                tabBarLabel: 'Profile',
                tabBarIcon: ({color}) => (
<<<<<<< HEAD
                <MaterialIcons name="person" size={26} color={color} />
                ),
            }}
            />
            {/* <Tab.Screen
            name="Login"
            component={SignInScreen}
            options={{
                tabBarVisible: 'false',
                tabBarLabel: 'Login',
                tabBarIcon: ({color}) => (
                <MaterialIcons name="person" size={26} color={color} />
=======
                <MaterialIcons name="face" size={26} color={color} />
>>>>>>> fb791d20900225cea8ef7c86b9fbddc3da9c4c36
                ),
            }}
            /> */}
        </Tab.Navigator>
    )
}

export default BottomTabNavigator
