import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const AnswerCardReading = () => {

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

                  <Pressable
                    style={[styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}
                    >
                    <MaterialIcons name="expand-more" size={30} color="white" />
                  </Pressable>

                    {/* Content of Questions for chapter here */}

                    <Text style={styles.modalText}>Questions here</Text>
                    

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
    elevation: 5
  },
  button: {
    borderRadius: 10,
    height: 70,
    paddingHorizontal: 25,
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
    borderRadius: 30
  },
  textStyle: {
    color: "black",
    textAlign: "center"
  },
  modalText: {
    margin: 20,
    textAlign: "center"
  }
});

export default AnswerCardReading;