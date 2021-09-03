import React from 'react';
import {StyleSheet, View, Text, Dimensions, SafeAreaView} from 'react-native';
import ReturnProfileScreen from './ReturnProfileScreen';
import SettingAction from './SettingAction';
import auth from '@react-native-firebase/auth';
import SignOutButton from './SignOutButton';

const SettingScreen = ({navigation}) => {
  return (
      <SafeAreaView style={styles.screenContainer}>
          <ReturnProfileScreen
                title='Setting'
                navigation={navigation}
          />
          <View style={styles.bodyContainer}>
            <Text style={styles.partDivide}>Account Settings</Text>
            <SettingAction name='Account Security'/>
            <SettingAction name='Learning Reminder'/>
            <SignOutButton/>
            <Text style={styles.partDivide}>Suppport</Text>
            <SettingAction name='About'/>
            <SettingAction name='FAQ'/>
            <SettingAction name='Share'/>
          </View>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#6360FF'
  },
  bodyContainer: {
    flex: 3,
    backgroundColor: '#F1F1FA',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    paddingTop: 20
  },
  partDivide: {
    fontSize: 15,
    color: 'gray',
    padding: 20,
  }
});

export default SettingScreen;
