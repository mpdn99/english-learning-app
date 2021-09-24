import React from 'react';
import {StyleSheet, View, Text, Dimensions, SafeAreaView} from 'react-native';
import HeaderBar from '../components/HeaderBar';
import { Button } from 'react-native-paper';
import ChooseSkill from '../components/ChooseSkill';



const TestScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <HeaderBar title="Tests" navigation={navigation}/>
      <View style={styles.bodyContainer}>
        <Text style={{fontSize: 16,
                      fontWeight: 'bold',
                      marginVertical: 20,
                      marginHorizontal: Dimensions.get('window').width*1/7}}
        >Do test</Text>
        <ChooseSkill
          skill='Listening Skill'
          navigation={navigation}
          screen='ListTest'
          icon='face'
          color='blue'
        />
        <ChooseSkill
          skill='Reading Skill'
          navigation={navigation}
          screen='Reading'
          icon='book'
          color='green'
        />
        <ChooseSkill
          skill='Writing'
          navigation={navigation}
          screen=''
          icon='pencil'
          color='purple'
        />
        <ChooseSkill
          skill='Quizzz'
          navigation={navigation}
          screen='Quizz'
          icon='puzzle'
          color='#ff9000'
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
    flex: 2,
    backgroundColor: 'white',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    paddingTop: 20
  }
});

export default TestScreen;
