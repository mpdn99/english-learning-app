import React, { useState, useEffect } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import getQuestionsData from "../services/getQuestionsData";
import SectionDetail from "./SectionDetail";

const AnswerCardReading = ({value, part_id, setUserAnswers, userAnswers}) => {
  const  [questions, setQuestions] = useState([])
  
  // useEffect(() => {
  //   const getQuestionsDataFromPart = async () => {
  //     await getQuestionsData(part_id, setQuestions)
  //   }
  //   getQuestionsDataFromPart()
  //   return () => {
  //     setQuestions([])
  //   }
  // }, [])

  useEffect(() => {
    const getQuestionsDataFromPart = async () => {
      await getQuestionsData(part_id, setQuestions)
    }
    getQuestionsDataFromPart()
    return () => {
      setQuestions([])
    }
    // console.log(part_id)
  }, [part_id])

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView>
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert("Answer has been closed.");
                setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                
                <View style={styles.modalView}>
                <ScrollView style={{marginBottom: 25}}>
                  {
                    questions.filter(q => q.part_id === part_id).map((question, index) => {
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
                </ScrollView>
                  <View style={{flexDirection: "column-reverse", flex: 1, alignItems: "center", position: 'absolute', bottom: 20}}>
                    <Pressable
                      style={[styles.buttonClose]}
                      onPress={() => setModalVisible(!modalVisible)}
                      >
                      <MaterialIcons name="expand-more" size={30} color="white" />
                    </Pressable>
                  </View>
                </View>
                </View>
            </Modal>
        </View>
        <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(true)}
            >
                <Text style={styles.textStyle}>Questions</Text>
        </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  centeredView: {
      flex: 1,
  },
  modalView: {
    flex: 1,
    backgroundColor: "white",
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    height: 70,
    paddingHorizontal: 40,
    marginRight: 20,
    marginLeft: -30,
  },
  buttonOpen: {
    backgroundColor: '#D2DFFF',
    borderColor: 'blue',
    borderWidth: 1,
    justifyContent: 'center'
  },
  buttonClose: {
    backgroundColor: "#2196F3",
    borderRadius: 30,
  },
  textStyle: {
    color: "black",
    textAlign: "center"
  },
  modalText: {
    margin: 20,
    textAlign: "center",
    
  }
});

export default AnswerCardReading;