import React from 'react';
import {StyleSheet, View, Text, ScrollView, Dimensions, TextInput, CheckBox, Button, Alert} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FlatButton from '../components/FlatButton';
import { Checkbox } from 'react-native-paper';

const LoginScreen = () => {

    const [email, onChangeEmail] = React.useState(null);
    const [pass, onChangePass] = React.useState(null);

    const [isSelected, setSelection] = React.useState(false); //checkbox remember
    
    return (
        <View style={styles.scrollView} showsVerticalScrollIndicator={false}>
            <View style={styles.topView}></View>
            <View style={styles.bottomView}>
                <Text style={styles.welcome}>Welcome</Text>
                <Text>Don't have account?
                    <Text style={styles.registernow}>{' '}Register now</Text>
                </Text>
                <View style={styles.viewForm}>
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
                    <FlatButton
                        title='SIGN IN'
                        color='blue'
                        pressed='SIGN IN'
                        long={100}
                    />
                    <View style={styles.rememberPass}>
                        <View style={{flex: 1, marginLeft: 5, flexDirection: 'row'}}>
                            <View style={{marginTop: -8}}>
                                <Checkbox.Android status={isSelected ? 'checked' : 'unchecked'}
                                            onPress={() => {
                                            setSelection(!isSelected);
                                            }}
                                            color={'#FF8181'}
                                />
                            </View>
                            <Text style={{}}>Remember</Text>
                        </View>
                        <Text>Forgot Password</Text>
                    </View>
                </View>
                <Text style={{alignSelf: 'center', marginTop: -20}}>Or</Text>
                <View style={styles.button}>
                    <FlatButton
                        title='Sign in with GOOGLE'
                        color='red'
                        pressed='GG'
                    />
                    <View style={{width: Dimensions.get('window').width*1/50}}></View>
                    <FlatButton
                        title='Sign in with FACEBOOK'
                        color='blue'
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
        backgroundColor: 'white'
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
