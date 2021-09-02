import React from 'react';
import {SafeAreaView ,StyleSheet, View, Text, Dimensions, Button, Alert} from 'react-native';
import V2ReturnTestScreen from '../components/V2ReturnTestScreen';
import PreviousNextButton from '../components/PreviousNextButton';
import { Checkbox } from 'react-native-paper';

const TestQuizzScreen = ({navigation}) => {

    const [checked1, setChecked1] = React.useState(false);
    const [checked2, setChecked2] = React.useState(false);
    const [checked3, setChecked3] = React.useState(false);
    const [checked4, setChecked4] = React.useState(false);

    return (
        <SafeAreaView style={styles.scrollView} showsVerticalScrollIndicator={false}>
            <View style={styles.topView}>
              <V2ReturnTestScreen
              title='Topic'
              navigation={navigation}
              />
              <Text style={styles.questText}>Here is the topic of the question</Text>
            </View>
            <View style={styles.bottomView}>
              <Text style={styles.deatail}>
                Something here is a question
                Something here is a question
                Something here is a question
                Something here is a question
                Something here is a question
                Something here is a question
                Something here is a question
                Something here is a question
              </Text>

              <View>
                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
                  <Checkbox.Android status={checked1 ? 'checked' : 'unchecked'}
                                    onPress={() => {
                                      setChecked1(!checked1);
                                    }}
                                    color={'#FF8181'}
                  />
                  <Text style={{marginLeft: 10}}>Place your text</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Checkbox.Android status={checked2 ? 'checked' : 'unchecked'}
                                    onPress={() => {
                                      setChecked2(!checked2);
                                    }}
                                    color={'#FF8181'}
                  />
                  <Text style={{marginLeft: 10}}>Place your text</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Checkbox.Android status={checked3 ? 'checked' : 'unchecked'}
                                    onPress={() => {
                                      setChecked3(!checked3);
                                    }}
                                    color={'#FF8181'}
                  />
                  <Text style={{marginLeft: 10}}>Place your text</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Checkbox.Android status={checked4 ? 'checked' : 'unchecked'}
                                    onPress={() => {
                                      setChecked4(!checked4);
                                    }}
                                    color={'#FF8181'}
                  />
                  <Text style={{marginLeft: 10}}>Place your text</Text>
                </View>
              </View>

              <View style={styles.lineStyle}></View>
              <View style={styles.button}>
                    <PreviousNextButton
                        text='Previous'
                        color='#6360FF'
                        onPress={() => Alert.alert('GG')}
                    />
                    <PreviousNextButton
                    text='Next'
                    color='#7DC579'
                    onPress={() => Alert.alert('FB')}
                    />
              </View>
            </View>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create ({
    scrollView: {
        flex: 1,
        backgroundColor: 'white'
    },
    topView: {
        flex: 1.5,
        backgroundColor: '#6360FF',
    },
    bottomView: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20,
        borderTopStartRadius: 50,
        borderTopEndRadius: 50,
        bottom: Dimensions.get('window').height/8
    },
    questText: {
      fontSize: 30,
      color: 'white',
      marginHorizontal: 20,
      marginTop: 150,
    },
    deatail: {
      fontSize: 15,
      marginTop: 10,
      padding: 10,
    },
    lineStyle: {
      borderWidth: 0.2,
      borderColor: 'black',
      marginTop: 20,
    },
    button: {
      justifyContent: 'space-around',
      flexDirection: 'row',
      height: 50,
      
    }
});

export default TestQuizzScreen;
