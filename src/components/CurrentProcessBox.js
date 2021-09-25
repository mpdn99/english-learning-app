import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions, Alert} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FlatButton from './FlatButton'
import {Button} from 'react-native-paper';

const CurrentProcessBox = ({photoURL}) => {
    return (
        <View style={styles.viewBox}>
            <View style={styles.Unknown3}>
                <Image
                    style={styles.Unknown2}
                    source={require('../images/Airplane.png')}
                    resizeMode='stretch'
                />
                <View style={{marginRight: 20, paddingLeft: -10}}>
                    <Text style={styles.Unknown1}>We can help you</Text>
                    {/* <FlatButton title='Find out now!' color='#8DC484' long={50} onPress={() => Alert.alert('Take a survey to get recommendation.')}/> */}
                    <Button
                        mode='contained'
                        color= '#8dc484'
                        onPress={() => Alert.alert('Take a survey to get recommendation.')}
                        style={{
                            marginTop: 10,
                        }}
                    >
                        <Text style={{fontSize: 15, color:'white'}}>Find out now!</Text>
                    </Button>
                </View>
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    viewBox: {
        height: 100,
        width: Dimensions.get('window').width/14*11,
        backgroundColor: '#F5F5F5',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        position: 'absolute',
        borderRadius: 15,
        marginTop: -50
    },
    userName: {
        color: 'white',
        fontSize: 20
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    avatarContainer: {
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'flex-start',
        alignItems: 'center',
        margin: 20,
        marginBottom: 10
    },
    medalImage: {
        width: 25,
        height: 25,
        borderRadius: 0,
    },
    medalText: {
        color: 'black',
        fontSize: 12
    },
    Unknown1: {
        color: 'black',
        fontSize: 20,
        alignSelf: 'center',
        marginTop: -10
    },
    Unknown2: {
        width: 100,
        height: 100,
        borderRadius: 15,
        position: 'relative'
    },
    Unknown3: {
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'flex-start',
        alignItems: 'center',
        margin: 50,
        marginTop: 10,
        marginBottom: 10,
    },
});

export default CurrentProcessBox;