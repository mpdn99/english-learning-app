import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert } from 'react-native'

const FlatButton = ({title, pressed, color, long}) => {
    return (
        <TouchableOpacity
            style={[styles.flatbutton, {backgroundColor: color, width: long}]}
            onPress={() => Alert.alert(pressed)}
        >
            <View style={{flexDirection: 'column', flexShrink: 1}}>
            <Text style={{color: 'white', justifyContent:'center'}}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default FlatButton

const styles = StyleSheet.create({
    flatbutton: {
        height: 40,
        alignSelf:'center',
        alignItems:'center',
        flexDirection:'row',
        borderRadius: 10,
        padding: 15,
        margin: 10,
        paddingVertical: 10,

    }
})
