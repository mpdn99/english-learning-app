import React from 'react';
import {SafeAreaView ,StyleSheet, View, Text, Dimensions, ScrollView, ActivityIndicator, Alert} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ReturnTestScreen from '../components/ReturnTestScreen';
import LinearGradient from 'react-native-linear-gradient';
import DropDownPicker from 'react-native-dropdown-picker';
import AnswerCardReading from '../components/AnswerCardReading';
import { useState, useEffect } from 'react';
import ReadingContent from '../components/ReadingContent';
import getPartsData from '../services/getPartsData';
import { Button } from 'react-native-paper';

const ReadingScreen = ({navigation, route}) => {

  const [parts, setParts] = useState([])
  const [loading, setLoading] = useState(true)
  const [content, setContent] = useState()
  const [currentPart, setCurrentPart] = useState();
  const [userAnswers, setUserAnswers] = useState([])
  //Dropdown Menu
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(0);
  const [items, setItems] = React.useState([
    {label: 'Passage 1', value: 1},
    {label: 'Passage 2', value: 2},
    {label: 'Passage 3', value: 3},
    {label: 'Passage 4', value: 4}
  ]);
  ///////////////////

  const test_id = route.params.test_id;
  useEffect(() => {
    const fetchApi = async () => {
      await getPartsData(test_id, setParts, setLoading)
    }
    fetchApi();
    return () => {
      setParts([])
    }
  }, [])

  useEffect(() => {
    parts.map((part, index) => {
      if (value === (index+1)) {
          setContent(part.content);
          setCurrentPart(part.part_id)
      }
  })
  setLoading(false)
    return () => {
      setContent()
    }
  }, [value])

  // useEffect(() => {
  //   const getQuestionsDataFromPart = async () => {
  //     parts.map( async (part) => {
  //       await getQuestionsData(part.part_id, setQuestions)
  //     })
  //   }
  //   getQuestionsDataFromPart()
  //   return () => {
  //     setQuestions([])
  //   }
  // }, [parts])

  // useEffect(() => {
  //   console.log(parts)
  // }, [parts])

  const SubmitExam = () => {
    var point = 0;
    userAnswers.map((ua) => {
      point = point + ua.point
    })
    return(
      Alert.alert('Total score: '+ (point/35).toFixed(1), 
      `
      Correct answers: ${point}
      Wrong answers: ${35-point}
      ` )
    )
  }

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.bodyContainer}>
        <ReturnTestScreen title='Reading Test'
                          iconColor='black'
                          navigation={navigation}/>
        
        {/* Put topics and contents in the ReadingContent component*/}
        {loading?(
          <ActivityIndicator style={{flex: 1}} />
        ):
        (
            <ReadingContent
              value={value}
              content={content}
              SubmitExam={SubmitExam}
            />
        )}

        <LinearGradient
          colors={['white', '#D2DFFF']}
          style={styles.bottomMenu}>
          <DropDownPicker
            placeholder='Passages'
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
            part_id={currentPart}
            setUserAnswers={setUserAnswers}
            userAnswers={userAnswers}
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
    paddingHorizontal: 80,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0
  },
  chooseChap: {
    marginLeft: -30,
    width: 150,
    height: 70,
    paddingHorizontal: 35,
    borderColor: '#6360FF',
    borderWidth: 1.5,
    backgroundColor: '#D2DFFF'
  }
});

export default ReadingScreen;
