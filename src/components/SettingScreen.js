import React from 'react';
import {StyleSheet, View, Text, Dimensions, SafeAreaView} from 'react-native';
import SettingAction from './SettingAction';
import SignOutButton from './SignOutButton';
import ReturnScreen from './ReturnScreen';
import ShareButton from './ShareButton';
import SendFeedback from './SendFeedback';

const SettingScreen = ({navigation}) => {

  const feedback = "mailto: 6aalhp@gmail.com"

  return (
      <SafeAreaView style={styles.screenContainer}>
          <ReturnScreen
                title='Setting'
                screen='Profile'
                navigation={navigation}
          />
          <View style={styles.bodyContainer}>
            <Text style={styles.partDivide}>Account Settings</Text>
            <SettingAction name='Account' navigation={navigation} screen="EditProfile"/>
            {/* <SettingAction name='Learning Reminder'/> */}
            <SignOutButton/>
            <Text style={styles.partDivide}>Suppport</Text>
            <SettingAction
              name='About'
              screen='About'
              navigation={navigation}
            />
            
            <ShareButton/>
            <SendFeedback
              url={feedback}
            />
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
