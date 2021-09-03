import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ReturnTestScreen = ({navigation, title, iconColor, textColor}) => {
    const Back = () => {
        navigation.navigate('Test');
    }
    return (
        <View style={styles.bar}>
            <TouchableOpacity onPress={Back} style={styles.backbtn}>
                <MaterialIcons name="chevron-left" size={40} color={iconColor} />
            </TouchableOpacity>
            <Text style={[styles.headerTitle,{color: textColor}]}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    bar: {
        backgroundColor: 'white',
        height: 55,
        flexDirection: 'row',
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
    },
    headerTitle: {
        fontWeight: 'bold',
        alignSelf: 'center',
        fontSize: 20,
        marginHorizontal: Dimensions.get('window').width*1/5,
    },
    backbtn: {
        alignSelf: 'center'
    }
})
export default ReturnTestScreen;