import React, { useEffect, useState } from 'react';
import {SafeAreaView ,StyleSheet, View, Image, Text, TouchableOpacity, Dimensions, ScrollView, TextInput, KeyboardAvoidingView, StatusBar, FlatList, SectionList, ActivityIndicator, Alert} from 'react-native';
import CourseCard from '../components/CourseCard';
import SectionDetail from '../components/SectionDetail';
import SectionName from '../components/SectionName';
// import { ScrollView, TextInput } from 'react-native-gesture-handler';
import V2ReturnTestScreen from '../components/V2ReturnTestScreen';
import AudioPlayer from '../components/AudioPlayer';
import data from '../data/tests.json'
import { Item } from 'react-native-paper/lib/typescript/components/List/List';
import FlatButton from '../components/FlatButton';
import getTestsData from '../services/getTestsData';
import firestore from '@react-native-firebase/firestore';
import getPartsData from '../services/getPartsData';
import getQuestionsData from '../services/getQuestionsData';
import getAnswerData from '../services/getAnswerData';


const AudioplaylistScreen = ({navigation, route}) => {
  const [ShowCourseContentView, setCourseContentView] = useState(true);
  const [textColor1, setTextColor1] = useState('#161719');
  const [textColor2, setTextColor2] = useState('#91919F');
  const [brgColor1, setBgrdColor1] = useState('white');
  const [brgColor2, setBgrdColor2] = useState('#F1F1FA');
  const [note, setNote] = useState();


  const CourseContentView = () => {
    setCourseContentView(true);
    setTextColor1('#161719');
    setTextColor2('#91919F');
    setBgrdColor1('white');
    setBgrdColor2('#F1F1FA');
  }
  const YourNotebookView = () => {
    setCourseContentView(false);
    setTextColor1('#91919F');
    setTextColor2('#161719');
    setBgrdColor1('#F1F1FA');
    setBgrdColor2('white');
  }
  return (
    <SafeAreaView style={styles.screenContainer}>
      <V2ReturnTestScreen
        title='1. Test 1'
        navigation={navigation}
      />
      <View style={styles.video}>
        <AudioPlayer/>
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.tabBtn}>
          <TouchableOpacity>
            <View style={[styles.tabMenu, {backgroundColor: brgColor1}]}>
              <Text style={[styles.tabBtnText, {color: textColor1}]} onPress={CourseContentView}>Course Content</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={[styles.tabMenu, {backgroundColor: brgColor2}]}>
              <Text style={[styles.tabBtnText, {color: textColor2}]} onPress={() => console.log(route.params)}>Your Notebook</Text>
            </View>
          </TouchableOpacity>
        </View>

        {ShowCourseContentView? <CourseContentDetail test_id={route.params.test_id}/> : <YourNotebookDetail note={note} setNote={setNote}/>}

      </View>
    </SafeAreaView>
  );
};

const CourseContentDetail = ({test_id}) => {
  const [parts, setParts] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userAnswers, setUserAnswers] = useState([])

  useEffect(() => {
    const fetchApi = async () => {
      await getPartsData(test_id, setParts)
    }
    fetchApi()
    setLoading(false)
  }, [])

  useEffect(() => {
    const getQuestionsDataFromPart = async () => {
      parts.map( async (part) => {
        await getQuestionsData(part.part_id, setQuestions)
      })
    }
    getQuestionsDataFromPart()
  }, [parts])

  useEffect(() => {
    console.log(userAnswers)
  }, [userAnswers])

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

  if (loading) {
    return <ActivityIndicator />;
  }
    return (
        <ScrollView>
          {
            parts.map((part, index) =>{
              return(
                <View key={index}>
                <SectionName
                  section={index + 1}
                  topic={part.title}
                />
                  {
                    questions.filter(q => q.part_id === part.part_id).map((question, index) => {
                      // console.log(question.question)
                      // const answer = answers.filter(a => a.question_id === question.question_id)
                      // console.log(answers)
                      return(
                        <SectionDetail
                        key={index}
                        section={index + 1}
                        topic={question.question}
                        question={question.question_id}
                        userAnswers={userAnswers}
                        setUserAnswers={setUserAnswers}
                      />
                      )
                    })
                  }
                </View>
              )
            })
          }
          <FlatButton color="#6360FF" long={30} title="SUBMIT" onPress={SubmitExam}/>
        </ScrollView>
    );
}

const YourNotebookDetail = ({note, setNote}) => {
    return (
      <View style={styles.noteView}
                  showsVerticalScrollIndicator={false}>
        <StatusBar animated={true} backgroundColor= '#6360FF'/>
        <TextInput
            style={styles.textNote}
            multiline
            editable
            placeholder='Note: ' 
            onChangeText={setNote}
            value={note}
            >
        </TextInput>
      </View>
    );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#6360FF'
  },
  bodyContainer: {
    flex: 1,
    backgroundColor: 'white',
    height: 700
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
  noteView: {
      backgroundColor: 'pink',
      marginHorizontal: 20,
      borderRadius: 15,
      height: Dimensions.get('window').height*50/100,
  },
  textNote: {
      fontSize: 20,
      marginVertical: 10,
      marginHorizontal: 20,
  },
  video: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    backgroundColor: 'white',
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
    padding: 20
  },
  tabMenu: {
    height: 60,
    width: Dimensions.get('window').width/2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  lineStyle:{
    borderWidth: 0.3,
    borderColor:'gray',
    marginVertical: 10,
    marginHorizontal: 30
  },

});

export default AudioplaylistScreen;
