import React from 'react';
import {SafeAreaView ,StyleSheet, View, Text, ScrollView, Dimensions, TextInput, CheckBox, Button, Alert} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FlatButton from '../components/FlatButton';

const SignInScreen = () => {
    const [namecalled, onChangeNameCalled] = React.useState(null);
    const [email, onChangeEmail] = React.useState(null);
    const [pass, onChangePass] = React.useState(null);
    const [confirmpass, onChangeConfirmPass] = React.useState(null);
    
    return (
        <SafeAreaView style={styles.scrollView}
              showsVerticalScrollIndicator={false}
              backgroundColor='white'
        >
            <View style={styles.topView}></View>
            <View style={styles.bottomView}>
                <Text style={styles.welcome}>Welcome</Text>
                <View style={styles.viewForm}>
                    <TextInput style={styles.textInput}
                        onChangeText={onChangeNameCalled}
                        value={namecalled}
                        placeholder="What should we call you?"
                    />
                    <TextInput style={styles.textInput}
                        onChangeText={onChangeEmail}
                        value={email}
                        placeholder="Email"
                    />
                    <TextInput style={styles.textInput}
                        onChangeText={onChangePass}
                        value={pass}
                        placeholder="Password"
                    />
                    <TextInput style={styles.textInput}
                        onChangeText={onChangeConfirmPass}
                        value={confirmpass}
                        placeholder="Confirm Password"
                    />
                    <FlatButton
                        text='SIGN UP'
                        color='blue'
                        onPress={() => Alert.alert('SIGN')}
                    />
                </View>
                <Text style={{alignSelf: 'center', marginTop: 20}}>Or</Text>
                <View style={styles.button}>
                    <FlatButton
                        text='Sign up with GOOGLE'
                        color='red'
                        onPress={() => Alert.alert('GG sign up')}
                    />
                    <View style={{width: Dimensions.get('window').width*1/30}}></View>
                    <FlatButton
                    text='Sign up with FACEBOOK'
                    color='blue'
                    onPress={() => Alert.alert('FB sign up')}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create ({
    scrollView: {
        flex: 1,
    },
    topView: {
        flex: 1,
        backgroundColor: '#6360FF',
        height: Dimensions.get('window').height /2.5
    },
    bottomView: {
        flex: 1.5,
        backgroundColor: 'white',
        padding: 40,
        borderTopStartRadius: 50,
        borderTopEndRadius: 50,
        bottom: 120,
    },
    welcome: {
        color: '#4632A1',
        fontSize: 32,
    },
    registernow: {
        color: 'red',
        fontStyle:'italic',
        fontWeight: 'bold',
    },
    viewForm: {
        marginTop: 20,
    },
    textInput: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
    button: {
      
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 20,
        marginHorizontal: -20
    }
});

export default SignInScreen;
