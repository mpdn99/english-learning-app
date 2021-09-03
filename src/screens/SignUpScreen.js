import React from 'react';
import {StyleSheet, View, Text, ScrollView, Dimensions, TextInput, CheckBox, Button, Alert} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FlatButton from '../components/FlatButton';
import { Checkbox } from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import SignInWithFacebook from '../services/SignInWithFacebook';
import SignInWithGoogle from '../services/SignInWithGoogle';

const SignUpScreen = () => {

    const [namecalled, onChangeNameCalled] = React.useState(null);
    const [email, onChangeEmail] = React.useState(null);
    const [pass, onChangePass] = React.useState(null);
    const [confirmpass, onChangeConfirmPass] = React.useState(null);

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
        // auth().currentUser.sendEmailVerification
    }
    
    return (
        <View style={styles.scrollView} showsVerticalScrollIndicator={false}>
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
        flex: 2.5,
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
    textInput: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#FCFCFF'
      },
    button: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 10,
        marginHorizontal: -20
    }
});

export default SignUpScreen;
