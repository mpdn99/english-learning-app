import React, { useState } from 'react';
import {SafeAreaView ,StyleSheet, View, Text, StatusBar, ScrollView, Dimensions, Image, Alert, TextInput} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CourseCard from '../components/CourseCard';
import HeaderBar from '../components/HeaderBar';
import auth from '@react-native-firebase/auth';
import SettingButton from '../components/SettingButton';
import FlatButton from '../components/FlatButton';

const ChangeProfileScreen = ({navigation}) => {
  const [displayName, setDisplayName] = useState();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [confirmPass, setConfirmPass] = useState();
  const user = auth().currentUser;
  const updateProfile = () => {
    if(displayName!=null){
      user.updateProfile({
        displayName: displayName
      })
    }
    if(email!=null){
      user.updateEmail(email)
    }
    if(pass!=null && confirmPass!=null){
      user.updatePassword(pass)
    }
  }
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#6360FF'}}>
      <View style={styles.topView}>
          <HeaderBar title="Edit Profile" navigation={navigation}/>
        <View style={styles.avatarContainer}>
            <Image
              style={styles.avatar}
              source={{uri: user.photoURL}}
            />
        </View>
      </View>
      <View style={styles.bottomView}>
        <Text style={styles.inputTitle}>Name: </Text>
        <TextInput style={styles.textInput} placeholder={user.displayName} value={displayName} />
        <View style={styles.lineStyle}></View>
        <Text style={styles.inputTitle}>Email: </Text>
        <TextInput style={styles.textInput} placeholder={user.email}/>
        <View style={styles.lineStyle}></View>
        <Text style={styles.inputTitle}>New password: </Text>
        <TextInput style={styles.textInput}/>
        <View style={styles.lineStyle}></View>
        <Text style={styles.inputTitle}>Confirm new password: </Text>
        <TextInput style={styles.textInput}/>
        <View style={styles.lineStyle}></View>
        <FlatButton 
          title="Save"
          color="#6360FF"
          long={140}
          onPress={updateProfile}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  topView: {
    flex: 1,
    backgroundColor: '#6360FF',
    height: Dimensions.get('window').height/1.5
  },
  bottomView: {
    flex: 2.5,
    backgroundColor: 'white',
    padding: 50,
    borderTopStartRadius: 40,
    borderTopEndRadius: 40,
    bottom: -5,
  },
  textView: {
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userName: {
    color: 'white',
    fontSize: 25,
    alignSelf: 'center'
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: -20,
    marginBottom: 10,
    alignSelf: 'center',
  },
  avatarContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: 20,
    marginBottom: 10,
    marginTop: 30,
  },
  notificationIcon: {
    alignSelf: 'flex-end',
    marginTop: -45,
    marginRight: 20,
  },
  inputTitle:{
    fontWeight: 'bold'
  },
  lineStyle:{
    borderWidth: 0.2,
    borderColor:'white',
    marginVertical: 10,
    marginHorizontal: 50,
  },
});

export default ChangeProfileScreen;
