import React, { useState } from 'react';
import {StyleSheet, View, StatusBar, Image, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import HeaderBar from '../components/HeaderBar'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CourseCard from '../components/CourseCard';


const CourseScreen = ({navigation}) => {
  const [ShowInProgressView, setShowInProgressView] = useState(true);
  const [textColor1, setTextColor1] = useState('#161719');
  const [textColor2, setTextColor2] = useState('#91919F');
  const InProgressView = () => {
    setShowInProgressView(true);
    setTextColor1('#161719');
    setTextColor2('#91919F');
  }
  const DoneView = () => {
    setShowInProgressView(false);
    setTextColor1('#91919F');
    setTextColor2('#161719');
  }
  return (
    <SafeAreaView style={styles.screenContainer}>
      <StatusBar animated={true} backgroundColor= '#6360FF'/>
      <HeaderBar title="My Courses" navigation={navigation}/>
      <View style={styles.bodyContainer}>
        <View style={styles.tabBtn}>
          <TouchableOpacity>
            <Text style={[styles.tabBtnText, {color: textColor1}]} onPress={InProgressView}>In Progress</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={[styles.tabBtnText, {color: textColor2}]} onPress={DoneView}>Done</Text>
          </TouchableOpacity>
        </View>
        {ShowInProgressView?(
          <View>
            <CourseCard title="Writing skill: How to write informal letter" category="All level"/>
            <CourseCard title="Writing skill: How to write formal letter" category="All level"/>
          </View>
        ):null}
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
    backgroundColor: 'white',
    borderTopStartRadius:20,
    borderTopEndRadius:20,
    flex: 2
  },
  tabBtn: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 25,
    marginBottom: 25
  },
  tabBtnText: {
    fontSize: 18,
    fontWeight: 'bold'
  },

});

export default CourseScreen;
