import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const CurrentProcessBox = ({photoURL}) => {
    return (
        <View style={styles.viewBox}>
            <View style={styles.Unknown3}>
                <Image
                    style={styles.Unknown2}
                    source={{uri: photoURL}}
                />
                <View style={{ paddingLeft: 15 }}>
                    <Text style={styles.Unknown1}>Declarative interfaces for any Apple Devices</Text>
                    <Text style={{ color: 'black' }}>DR 850.000</Text>
                </View>
            </View>
        
            <View style={{flexDirection:'row',
                          width: Dimensions.get('window').width/14*10,
                          justifyContent: 'space-between',
            }}>
                <View style={styles.medalView}>
                    <Image
                        style={styles.medalImage}
                        source={require('../images/medal.png')}
                    />
                    <View style={{ paddingLeft: 10 }}>
                        <Text style={styles.medalText}>Current Process</Text>
                        <Text style={{ color: 'black' }}>50%</Text>
                    </View>
                </View>
                <View style={styles.medalView}>
                    <Image
                        style={styles.medalImage}
                        source={require('../images/medal.png')}
                    />
                    <View style={{ paddingLeft: 10 }}>
                        <Text style={styles.medalText}>Current Process</Text>
                        <Text style={{ color: 'black' }}>50%</Text>
                    </View>
                </View>
            </View>
            <Text>here the process bar</Text>
        </View>

    );
};

const styles = StyleSheet.create({
    viewBox: {
        height: 180,
        width: Dimensions.get('window').width/14*11,
        backgroundColor: '#F5F5F5',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        position: 'absolute',
        borderRadius: 15,
        marginTop: -100
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
    medalView: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        margin: 15,
        marginRight: 10,
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
        fontSize: 15,
    },
    Unknown2: {
        width: 60,
        height: 60,
        borderRadius: 15,
        marginRight: 10,
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