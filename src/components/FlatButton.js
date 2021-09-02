import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert } from 'react-native'

const FlatButton = ({title, pressed, color, long}) => {
    return (
        <TouchableOpacity
            style={[styles.flatbutton, {backgroundColor: color, paddingHorizontal: long}]}
            onPress={() => Alert.alert(pressed)}
        >
            <View style={{
                flexDirection: 'column',
                flexShrink: 1,
                justifyContent: 'center',
                alignSelf: 'center',
                alignItems: 'center',
                alignContent: 'center'
                }}>
            <Text style={{color: 'white'}}>{title}</Text>
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
