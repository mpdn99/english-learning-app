import React from 'react';
import {StyleSheet, View, Text, Dimensions, SafeAreaView} from 'react-native';
import CourseCard from '../components/CourseCard';
import HeaderBar from '../components/HeaderBar';



const TestScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <HeaderBar title="Tests" navigation={navigation}/>
      <View style={styles.bodyContainer}>
        <Text style={{fontSize: 16,
                      fontWeight: 'bold',
                      marginVertical: 15,
                      marginHorizontal: Dimensions.get('window').width*1/7}}
        >Available Test</Text>
        <CourseCard title="Reading"/>
        <CourseCard title="Speaking"/>
        <CourseCard title="Writing"/>
        <CourseCard title="Listening"/>
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
    flex: 2,
    backgroundColor: '#F1F1FA',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    paddingTop: 20
  }
});

export default TestScreen;
