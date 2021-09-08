import React, { useState } from 'react';
import {SafeAreaView ,StyleSheet, View, Image, Text, TouchableOpacity, Dimensions, ScrollView, TextInput, KeyboardAvoidingView} from 'react-native';
import CourseCard from '../components/CourseCard';
import SectionDetail from '../components/SectionDetail';
import SectionName from '../components/SectionName';
// import { ScrollView, TextInput } from 'react-native-gesture-handler';
import V2ReturnTestScreen from '../components/V2ReturnTestScreen';

const AudioplaylistScreen = ({navigation}) => {
  const [ShowCourseContentView, setCourseContentView] = useState(true);
  const [textColor1, setTextColor1] = useState('#161719');
  const [textColor2, setTextColor2] = useState('#91919F');
  const [brgColor1, setBgrdColor1] = useState('white');
  const [brgColor2, setBgrdColor2] = useState('#F1F1FA');

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
        title='1. Introduction'
        navigation={navigation}
      />
      <View style={styles.video}>
        <Image
            style={{
                resizeMode: 'contain',
                width: Dimensions.get('window').width,
                height: 130,
            }}
            source={require('../images/videoIMG.jpg')}
        />
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
              <Text style={[styles.tabBtnText, {color: textColor2}]} onPress={YourNotebookView}>Your Notebook</Text>
            </View>
          </TouchableOpacity>
        </View>

        {ShowCourseContentView? <CourseContentDetail/> : <YourNotebookDetail/>}

      </View>
    </SafeAreaView>
  );
};

const CourseContentDetail = () => {
    return (
        <ScrollView>
          <SectionName
            section='1'
            topic='Introduction'
            part='3/5'
            min='10'
          />
          <SectionDetail
            section='1'
            topic='say hello'
            min='9'
          />
          <SectionDetail
            section='1'
            topic='say hello'
            min='9'
          />
          <SectionDetail
            section='1'
            topic='say hello'
            min='9'
          />
          <View style={styles.lineStyle}></View>
          <SectionName
            section='1'
            topic='Introduction'
            part='3/5'
            min='10'
          />
          <SectionDetail
            section='1'
            topic='say hello'
            min='9'
          />
          <SectionDetail
            section='1'
            topic='say hello'
            min='9'
          />
          <SectionDetail
            section='1'
            topic='say hello'
            min='9'
          />
          <View style={styles.lineStyle}></View>
          <SectionName
            section='1'
            topic='Introduction'
            part='3/5'
            min='10'
          />
          <SectionDetail
            section='1'
            topic='say hello'
            min='9'
          />
          <SectionDetail
            section='1'
            topic='say hello'
            min='9'
          />
          <SectionDetail
            section='1'
            topic='say hello'
            min='9'
          />
          <View style={styles.lineStyle}></View>
        </ScrollView>
    );
}

const YourNotebookDetail = () => {
    return (
      <View style={styles.noteView}
                  showsVerticalScrollIndicator={false}>
        <StatusBar animated={true} backgroundColor= '#6360FF'/>
        <TextInput
            style={styles.textNote}
            multiline
            editable
            placeholder='Note: ' >
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
