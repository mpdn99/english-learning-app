import React from 'react';
import {StyleSheet, View, Text, StatusBar, ScrollView, Dimensions, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CourseCard from '../components/CourseCard';
import CurrentProcessBox from '../components/CurrentProcessBox';
import auth from '@react-native-firebase/auth';

const HomeScreen = ({navigation}) => {
  const user = auth().currentUser;
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.topView}>
        <View style={styles.avatarContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image
                style={styles.avatar}
                source={{uri: user.photoURL}}
            />
          </TouchableOpacity>
            <View style={{ paddingLeft: 15 }}>
              <Text style={styles.userName}>{user.displayName}</Text>
              <Text style={{ color: 'white' }}>{user.email}</Text>
            </View>
        </View>
        <MaterialIcons style={styles.notificationIcon} name='notifications' color='white' size={25} />
      </View>
      <View style={styles.bottomView}>
      <CurrentProcessBox photoURL={user.photoURL}/>
        <Text style={styles.text}>Recommendation</Text>
        <CourseCard title="Writing skill: How to write formal letter" category="All level"/>
        <CourseCard title="Writing skill: How to write formal letter" category="All level"/>
        <CourseCard title="Writing skill: How to write formal letter" category="All level"/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  topView: {
    flex: 1,
    backgroundColor: '#6360FF',
    height: Dimensions.get('window').height /1.5
  },
  bottomView: {
    flex: 1.5,
    backgroundColor: 'white',
    padding: 5,
    borderTopStartRadius: 45,
    borderTopEndRadius: 45,
    bottom: 100,
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 100,
    marginBottom: 15,
    marginLeft: 40
  },
  userName: {
    color: 'white',
    fontSize: 20
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  avatarContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 20,
    marginBottom: 10
  },
  notificationIcon: {
    alignSelf: 'flex-end',
    marginTop: -45,
    marginRight: 20,
  },
});

export default HomeScreen;
