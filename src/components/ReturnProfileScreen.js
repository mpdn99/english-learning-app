import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ReturnProfileScreen = ({navigation, title}) => {
    const Back = () => {
        navigation.navigate('Profile');
    }
    return (
        <View style={styles.bar}>
            <TouchableOpacity onPress={Back} style={styles.backbtn}>
                <MaterialIcons name="chevron-left" size={40} color="white" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    bar: {
        // backgroundColor: '#6360FF',
        height: 65,
        flexDirection: 'row'
    },
    headerTitle: {
        color: 'white',
        alignSelf: 'center',
        fontSize: 20
    },
    backbtn: {
        alignSelf: 'center'
    }
})
export default ReturnProfileScreen;