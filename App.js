// import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from './src/screens/HomeScreen';
import CourseScreen from './src/screens/CourseScreen';
import TestScreen from './src/screens/TestScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignInScreen from './src/screens/SignInScreen';
import ReadingScreen from './src/screens/ReadingScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import AudioplaylistScreen from './src/screens/AudioplaylistScreen';
import TestQuizzScreen from './src/screens/TestQuizzScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          activeTintColor: '#157cdb',
          inactiveTintColor: '#262626',
          style:{
            borderTopStartRadius: 20,
            borderTopEndRadius: 20,
            height: 60,
            position:'absolute'
          }
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
              <MaterialIcons name="flag" size={26} color={color} />
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
              <MaterialIcons name="explore" size={26} color={color} />
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
              <MaterialIcons name="person" size={26} color={color} />
            ),
          }}
          
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
