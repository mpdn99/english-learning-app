import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, ScrollView, Dimensions, TextInput, CheckBox, Button, Alert} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FlatButton from '../components/FlatButton';
import { Checkbox } from 'react-native-paper';
import SignInWithFacebook from '../services/SignInWithFacebook';
import SignInWithGoogle from '../services/SignInWithGoogle';
import auth from '@react-native-firebase/auth';
import * as Keychain from 'react-native-keychain';

const LoginScreen = ({navigation}) => {

    const [email, setEmail] = useState(null);
    const [pass, setPass] = useState(null);

    const [errorMsg, setErrorMsg] = useState(null);

    const [isSelected, setSelection] = useState(false); //checkbox remember

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

    // useEffect(async () => {
    //     try {
    //         // Retrieve the credentials
    //         const credentials = await Keychain.getGenericPassword();
    //         if (credentials) {
    //           console.log(
    //             'Credentials successfully loaded for user ' + credentials.username +' '+ credentials.password 
    //           );
    //         } else {
    //             console.log('No credentials stored');
    //         }
    //       } catch (error) {
    //         console.log("Keychain couldn't be accessed!", error);
    //     }
    // }, [])
    
    return (
        <View style={styles.scrollView} showsVerticalScrollIndicator={false}>
            <View style={styles.topView}></View>
            <View style={styles.bottomView}>
                <Text style={styles.welcome}>Welcome</Text>
                <Text>Don't have account?
                    <Text style={styles.registernow} onPress={() => {navigation.navigate('SignUp')}}>{' '}Register now</Text>
                </Text>
                <View style={styles.viewForm}>
                    <Text style={styles.errorMsg}>{errorMsg}</Text>
                    <TextInput style={styles.textInput}
                        onChangeText={setEmail}
                        value={email}
                        placeholder="Email"
                    />
                    <TextInput style={styles.textInput}
                        onChangeText={setPass}
                        value={pass}
                        placeholder="Password"
                        secureTextEntry={true}
                    />
                    <FlatButton
                        title='SIGN IN'
                        color='blue'
                        onPress={SignInWithMail}
                        long={140}
                        color='#6360FF'
                        pressed='SIGN IN'
                        long={100}
                    />
                    <View style={styles.rememberPass}>
                        <View style={{flex: 1, marginLeft: 5, flexDirection: 'row'}}>
                            {/* <View style={{marginTop: -8}}>
                                <Checkbox.Android
                                    status={isSelected ? 'checked' : 'unchecked'}
                                    onPress={() => {
                                    setSelection(!isSelected);
                                    isSelected?(Keychain.setGenericPassword(email, pass, isSelected)):(Keychain.resetGenericPassword())
                                    }}
                                    color={'#FF8181'}
                                />
                            </View>
                            <Text style={{}}>Remember</Text> */}
                        </View>
                        <Text>Forgot Password</Text>
                    </View>
                </View>
                <Text style={{alignSelf: 'center', marginTop: -20}}>Or</Text>
                <View style={styles.button}>
                    <FlatButton
                        title='Sign in with GOOGLE'
                        color='red'
                        onPress={SignInWithGoogle}
                        color='#FF8181'
                        pressed='GG'
                    />
                    <View style={{width: Dimensions.get('window').width*1/50}}></View>
                    <FlatButton
                        title='Sign in with FACEBOOK'
                        color='blue'
                        onPress={SignInWithFacebook}
                        color='#6360FF'
                        pressed='FB'
                    />
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
    },
    registernow: {
        color: 'red',
        fontStyle:'italic',
        fontWeight: 'bold',
    },
    viewForm: {
        marginTop: 30,
    },
    errorMsg: {
        color: 'red',
        textAlign: 'center',
        fontWeight: '500'
    },
    textInput: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#FCFCFF'
      },
    rememberPass: {
        height: 50,
        marginTop: 20,
        flexDirection: 'row',
    },
    button: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 20,
        marginHorizontal: -20
    }
});

export default LoginScreen;
