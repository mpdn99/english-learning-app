import React from "react";
import { useCallback } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Linking, Alert } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Share from 'react-native-share';

const SendFeedback = ({url}) => {
    
    const handlePress = useCallback(async () => {
        await Linking.openURL(url)
      }, [url]);

    return (
        <TouchableOpacity onPress={handlePress}>
            <View style={styles.viewform}>
                <Text style={styles.topText}>Feedback</Text>
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

export default SendFeedback;