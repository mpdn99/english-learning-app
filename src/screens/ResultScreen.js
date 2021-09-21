import React, { useState } from 'react';
import {StyleSheet, Text, View, TextInput, Dimensions, SafeAreaView, StatusBar} from 'react-native';
import ResultTable from '../components/ResultTable';
import ReturnScreen from '../components/ReturnScreen';

const ResultScreen = ({navigation}) => {

  return (
    <SafeAreaView style={styles.container}>
        <ReturnScreen
            title='Return Test'
            screen='Test'
            navigation={navigation}
        />
        <ResultTable/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6360FF'
    }
});

export default ResultScreen;
