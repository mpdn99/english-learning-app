import React from 'react';
import {StyleSheet, View, Text, Dimensions, SafeAreaView} from 'react-native';
import ReturnScreen from '../components/ReturnScreen';

const ContactSCreen = ({navigation}) => {
  return (
      <SafeAreaView style={styles.screenContainer}>
          <ReturnScreen
                title='Contact us'
                screen='Setting'
                navigation={navigation}
          />
          <View style={styles.bodyContainer}>

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
    paddingTop: 20
  },
  partDivide: {
    fontSize: 15,
    color: 'gray',
    padding: 20,
  }
});

export default ContactSCreen;
