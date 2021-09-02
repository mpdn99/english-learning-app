import React from 'react';
import {SafeAreaView ,StyleSheet, View, Text, StatusBar, ScrollView, Dimensions, Image} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CourseCard from '../components/CourseCard';
import HeaderBar from '../components/HeaderBar';

const ProfileScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.topView}>
        <HeaderBar title="" navigation={navigation} />
        <View style={styles.avatarContainer}>
            <Image
              style={styles.avatar}
              source={require('../images/avatar.jpg')}
            />
            <View style={{ paddingLeft: 15 }}>
              <Text style={styles.userName}>Gud Boy</Text>
              <Text style={{ color: 'white' }}>mobile.istech.club@gmail.com</Text>
            </View>
        </View>
        <View style={styles.lineStyle}></View>
        <View style={styles.medalView}>
                    <Image
                        style={styles.medalImage}
                        source={require('../images/medal.png')}
                    />
                    <View style={{ paddingLeft: 10 }}>
                        <Text style={styles.medalText}>Current Process</Text>
                        <Text style={{ color: 'white' }}>50%</Text>
                    </View>
                    <View style={{width: Dimensions.get('window').width*1/10}}></View>
                    <Image
                        style={styles.medalImage}
                        source={require('../images/medal.png')}
                    />
                    <View style={{ paddingLeft: 10 }}>
                        <Text style={styles.medalText}>Current Process</Text>
                        <Text style={{ color: 'white' }}>50%</Text>
                    </View>
        </View>
        
      </View>
      <View style={styles.bottomView}>
        <View style={styles.textView}>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>Courses</Text>
          <Text style={{fontSize: 14, fontWeight: 'bold', color: 'gray'}}>Total 6</Text>
        </View>
        <ScrollView>
          <CourseCard title="Writing skill: How to write formal letter" category="All level"/>
          <CourseCard title="Writing skill: How to write formal letter" category="All level"/>
          <CourseCard title="Writing skill: How to write formal letter" category="All level"/>
          <CourseCard title="Writing skill: How to write formal letter" category="All level"/>
          <CourseCard title="Writing skill: How to write formal letter" category="All level"/>
          <CourseCard title="Writing skill: How to write formal letter" category="All level"/>
        </ScrollView>
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
    flex: 2,
    backgroundColor: 'white',
    padding: 5,
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
    bottom: 40,
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
    marginLeft: 20,
    marginBottom: 10
  },
  notificationIcon: {
    alignSelf: 'flex-end',
    marginTop: -45,
    marginRight: 20,
  },
  lineStyle:{
    borderWidth: 0.2,
    borderColor:'white',
    marginVertical: 10,
    marginHorizontal: 50,
  },
  medalView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 10,
  },
  medalImage: {
    width: 25,
    height: 25,
    borderRadius: 0,
  },
  medalText: {
    color: 'white',
    fontSize: 12
  },
});

export default ProfileScreen;
