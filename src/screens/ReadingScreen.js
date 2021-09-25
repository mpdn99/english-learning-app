import React from 'react';
import {SafeAreaView ,StyleSheet, View, Text, Dimensions, ScrollView} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ReturnTestScreen from '../components/ReturnTestScreen';
import LinearGradient from 'react-native-linear-gradient';
import DropDownPicker from 'react-native-dropdown-picker';
import AnswerCardReading from '../components/AnswerCardReading';
import { useState, useEffect } from 'react';
import ReadingContent from '../components/ReadingContent';

const ReadingScreen = ({navigation}) => {

  //Dropdown Menu
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('1');
  const [items, setItems] = React.useState([
    {label: 'Chapter 1', value: '1'},
    {label: 'Chapter 2', value: '2'},
    {label: 'Chapter 3', value: '3'},
    {label: 'Chapter 4', value: '4'},
    {label: 'Chapter 5', value: '5'},
  ]);
  ///////////////////

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.bodyContainer}>
        <ReturnTestScreen title='Science with Craft'
                          iconColor='black'
                          navigation={navigation}/>

        {/* Put topics and contents in the ReadingContent component*/}
        <ReadingContent
          value={value}
        />

        <LinearGradient
          colors={['white', '#D2DFFF']}
          style={styles.bottomMenu}>
          <DropDownPicker
            placeholder='CHAPTERS'
            style={styles.chooseChap}
            showArrowIcon={false}
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
          />

          {/* Put questions and aswers in the AnswerCardReading */}
          <AnswerCardReading
            value={value}
          />

        </LinearGradient>
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
    flex: 1,
    backgroundColor: 'white',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    height: 700,
  },
  bookmark: {
    alignSelf: 'center',
    marginLeft: Dimensions.get('window').width*1/3.75
  },
  chapterContent: {
    fontSize: 16,
    color: 'black',
    marginLeft: 30,
    marginRight: 10,
  },
  bottomMenu: {
    paddingVertical: 30,
    paddingHorizontal: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chooseChap: {
    width: 150,
    height: 70,
    paddingHorizontal: 35,
    borderColor: '#6360FF',
    borderWidth: 1.5,
    backgroundColor: '#D2DFFF'
  }
});

export default ReadingScreen;
