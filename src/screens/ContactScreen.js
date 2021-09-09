import React, { useState } from 'react';
import {StyleSheet, Text, View, TextInput, Dimensions, SafeAreaView, StatusBar} from 'react-native';
import ReturnScreen from '../components/ReturnScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ContactScreen = ({navigation}) => {

  const [namecalled, setNamecalled] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [msg, setMsg] = React.useState(null);

  return (
      <SafeAreaView style={styles.screenContainer}>
          <StatusBar animated={true} backgroundColor= '#6360FF'/>
          <ReturnScreen
                title='Contact us'
                screen='Setting'
                navigation={navigation}
          />
          <View style={styles.bodyContainer}>
            <Text style={styles.getInTouch}>GET IN TOUCH!</Text>
            <Text style={styles.sub}>Have any question for us? Drop your details here</Text>
            <View style={styles.inputView}>
              <MaterialIcons name='person' size={26} color='#6360FF' style={styles.icon}/>
              <TextInput style={styles.textInput}
                onChangeText={setNamecalled}
                value={namecalled}
                placeholder="What should we call you?"
              />
            </View>
            <View style={styles.inputView}>
              <MaterialIcons name='email' size={26} color='#6360FF' style={styles.icon}/>
              <TextInput style={styles.textInput}
                onChangeText={setEmail}
                value={email}
                placeholder="Email"
                secureTextEntry={true}
                />
            </View>
            <Text style={{marginVertical: 10, marginBottom: 20, color: '#3C67F7'}}>Message</Text>
            <View style={styles.msgBox}>
              <TextInput style={styles.msgText}
                onChangeText={setMsg}
                value={msg}
                multiline
                editable
                placeholder="Leave your message here"
                secureTextEntry={true}
                />
            </View>
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
    flex: 3,
    backgroundColor: '#F1F1FA',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    paddingTop: 20,
    paddingHorizontal: 40
  },
  getInTouch: {
    color: '#6360FF',
    fontSize: 35,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 10
  },
  sub: {
    fontSize: 15,
    marginBottom: 20
  },
  textInput: {
    flex: 1,
    height: 40,
    padding: 5,
  },
  inputView: {
      flexDirection: 'row',
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomColor: 'blue',
      borderBottomWidth: 0.3,
      marginBottom: 20,
  },
  icon: {
      padding: 10
  },
  msgBox: {
    borderColor: 'blue',
    borderWidth: 0.2, 
    borderRadius: 5,
    height: Dimensions.get('window').height/3
  },
  msgText: {
    paddingHorizontal: 20,
  }
});

export default ContactScreen;
