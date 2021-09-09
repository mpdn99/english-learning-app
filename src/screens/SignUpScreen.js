import React from 'react';
import {StyleSheet, View, Text, ScrollView, Dimensions, TextInput, CheckBox, Button, Alert} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FlatButton from '../components/FlatButton';
import { Checkbox } from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import SignInWithFacebook from '../services/SignInWithFacebook';
import SignInWithGoogle from '../services/SignInWithGoogle';
import { useValidation } from 'react-native-form-validator';

const SignUpScreen = ({navigation}) => {

    const [namecalled, onChangeNameCalled] = React.useState();
    const [email, onChangeEmail] = React.useState(null);
    const [pass, onChangePass] = React.useState(null);
    const [confirmpass, onChangeConfirmPass] = React.useState(null);

    //Firebase Register Condition

    const { validate, isFieldInError, getErrorsInField, getErrorMessages } = 
        useValidation({
            state: {
                namecalled, email, pass, confirmpass
            }
        });

    const SignUp = () => {
        auth()
        .createUserWithEmailAndPassword(email, pass)
        .then(() => {
            auth().currentUser.updateProfile({
                displayName: namecalled,
                photoURL: 'https://cdn-icons-png.flaticon.com/512/147/147144.png'
            });
        })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
            }
            if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
            }
            console.error(error);
        });
        validate({
            namecalled: { required: true },
            email: {email: true, required: true},
            pass: { minlengthpass: 7, required: true },
            confirmpass: { equalPassword: pass }
        })
        // auth().currentUser.sendEmailVerification
    }
    
    return (
        <View style={styles.scrollView} showsVerticalScrollIndicator={false}>
            <View style={styles.topView}></View>
            <View style={styles.bottomView}>
                <Text style={styles.welcome}>Welcome</Text>
                <View style={styles.viewForm}>
                    <View style={styles.inputView}>
                        <MaterialIcons name='person' size={26} color='#6360FF' style={styles.icon}/>
                        <TextInput style={styles.textInput}
                            onChangeText={onChangeNameCalled}
                            value={namecalled}
                            placeholder="What should we call you?"
                        />
                    </View>
                    {isFieldInError('namecalled') &&
                        getErrorsInField('namecalled').map(errorMessage => (
                            <Text style={styles.errorMsg}>{errorMessage}</Text>
                    ))}
                    <View style={styles.inputView}>
                        <MaterialIcons name='mail' size={26} color='#6360FF' style={styles.icon}/>
                        <TextInput style={styles.textInput}
                            onChangeText={onChangeEmail}
                            value={email}
                            placeholder="Email"
                        />
                    </View>
                    {isFieldInError('email') &&
                        getErrorsInField('email').map(errorMessage => (
                            <Text style={styles.errorMsg}>{errorMessage}</Text>
                    ))}
                    <View style={styles.inputView}>
                        <MaterialIcons name='lock' size={26} color='#6360FF' style={styles.icon}/>
                        <TextInput style={styles.textInput}
                            onChangeText={onChangePass}
                            value={pass}
                            placeholder="Password"
                        />
                    </View>
                    {isFieldInError('pass') &&
                        getErrorsInField('pass').map(errorMessage => (
                            <Text style={styles.errorMsg}>{errorMessage}</Text>
                    ))}
                    <View style={styles.inputView}>
                        <MaterialIcons name='preview' size={26} color='#6360FF' style={styles.icon}/>
                        <TextInput style={styles.textInput}
                            onChangeText={onChangeConfirmPass}
                            value={confirmpass}
                            placeholder="Confirm Password"
                        />
                    </View>
                    {isFieldInError('confirmpass') &&
                        getErrorsInField('confirmpass').map(errorMessage => (
                            <Text style={styles.errorMsg}>{errorMessage}</Text>
                    ))}

                    <FlatButton
                        title='SIGN UP'
                        color='#6360FF'
                        onPress={SignUp}
                        long={100}
                    />
                </View>
                <Text style={{alignSelf: 'center', marginTop: 10}}>Or</Text>
                <View style={styles.button}>
                    <FlatButton
                        title='Sign in with GOOGLE'
                        color='#FE8888'
                        onPress={SignInWithGoogle}
                    />
                    <View style={{width: Dimensions.get('window').width*1/50}}></View>
                    <FlatButton
                        title='Sign in with FACEBOOK'
                        color='#6360FF'
                        onPress={SignInWithFacebook}
                    />
                </View>
                <Text style={{alignSelf: 'center', marginTop: 10}}
                    onPress={() => navigation.navigate('Login')}
                >You have an account?{' '}
                    <Text style={styles.signInText}>Sign in now</Text>
                </Text>
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
        flex: 3,
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
    button: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 10,
        marginHorizontal: -20
    },
    signInText: {
        color: 'red',
        fontWeight: 'bold',
        fontStyle: 'italic'
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
        marginBottom: 15
    },
    icon: {
        padding: 10
    },
    errorMsg: {
        color: 'red',
        textAlign: 'left',
        fontWeight: '500',
        marginTop: -15
    },
});

export default SignUpScreen;
