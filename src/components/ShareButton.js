import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Share from 'react-native-share';


const ShareButton = ({navigation}) => {
    
    const shareTo = async() => {
        const shareOption = {
            message: '',
        }

        try {
            const ShareResponse = await Share.open(shareOption);
        } catch(error) {
            console.log('Error => ', error);
        }
    }

    return (
        <TouchableOpacity onPress={shareTo}>
            <View style={styles.viewform}>
                <Text style={styles.topText}>Share</Text>
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

export default ShareButton;