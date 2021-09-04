import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, ScrollView, Dimensions, TextInput, CheckBox, Button, Alert} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FlatButton from '../components/FlatButton';
import { Checkbox } from 'react-native-paper';
import SignInWithFacebook from '../services/SignInWithFacebook';
import SignInWithGoogle from '../services/SignInWithGoogle';
import auth from '@react-native-firebase/auth';

const ForgotPassScreen = ({navigation}) => {

    const [email, setEmail] = useState(null);

    const [errorMsg, setErrorMsg] = useState(null);

    const SignInWithMail = () => {
        auth()
        .signInWithEmailAndPassword(email, pass)
        .catch(error => {
            if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
                setErrorMsg('Incorrect username or password.');
            }
            console.log(error);
        })
    }
    
    return (
        <View style={styles.scrollView} showsVerticalScrollIndicator={false}>
            <View style={styles.topView}></View>
            <View style={styles.bottomView}>
                <Text style={styles.welcome}>Forgot your password</Text>
                <Text>Please enter your email address to request a password reset.</Text>
                <View style={styles.viewForm}>
                    <Text style={styles.errorMsg}>{errorMsg}</Text>
                    <View style={styles.inputView}>
                        <MaterialIcons name='mail' size={26} color='#6360FF' style={styles.icon}/>
                        <TextInput style={styles.textInput}
                            onChangeText={setEmail}
                            value={email}
                            placeholder="Email"
                        />
                    </View>
                    <FlatButton
                        title='Request reset link'
                        color='blue'
                        // onPress={SignInWithMail}
                        long={140}
                        color='#6360FF'
                        pressed='SIGN IN'
                        long={100}
                    />
                    <Text style={styles.backToLogin} onPress={() => navigation.goBack()}>Back to Login</Text>
                </View>
            </View>
        </View>
    );
};


const styles = StyleSheet.create ({
    scrollView: {
        flex: 1,
        backgroundColor: '#F1F1FA'
    },
    topView: {
        flex: 1,
        backgroundColor: '#6360FF',
        height: Dimensions.get('window').height /2.5
    },
    bottomView: {
        flex: 1.5,
        backgroundColor: '#F1F1FA',
        padding: 40,
        borderTopStartRadius: 50,
        borderTopEndRadius: 50,
        bottom: 50,
    },
    welcome: {
        color: '#4632A1',
        fontSize: 32,
        marginBottom: 5,
    },
    registernow: {
        color: 'red',
        fontStyle:'italic',
        fontWeight: 'bold',
    },
    viewForm: {
        marginTop: 25,
    },
    errorMsg: {
        color: 'red',
        textAlign: 'center',
        fontWeight: '500'
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
        marginBottom: 20
    },
    icon: {
        padding: 10
    },
    button: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 20,
        marginHorizontal: -20
    },
    backToLogin: {
        textAlign: 'center',
        color: 'blue',
        margin: 5
    }
});

export default ForgotPassScreen;
