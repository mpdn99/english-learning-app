import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import auth from '@react-native-firebase/auth';

const SignOutButton = () => {
    
    const LogOut = () => {
        auth()
        .signOut()
    }

    return (
        <TouchableOpacity onPress={LogOut}>
            <View style={styles.viewform}>
                <Text style={styles.topText}>Sign out</Text>
                <MaterialIcons name='chevron-right' size={40} color='gray'/>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    viewform: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        justifyContent: 'space-between'
    },
    topText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5
    },
})

export default SignOutButton;