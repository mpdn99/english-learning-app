import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    Alert,
    Dimensions
} from 'react-native';

const PreviousNextButton = props => {
    const styleForButton = (
        <View style={[styles.button, {backgroundColor: props.color}]}>
            <View style={{width: 150, justifyContent: 'center'}}>
                <Text style={styles.buttontext}>
                    {props.text}
                </Text>
            </View>
        </View>
    );
    return (
        <TouchableOpacity onPress={props.onPress}>
            {styleForButton}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        flex: 1,
        borderRadius: 10,
        paddingVertical: 25,
        marginTop: 10,
    },
    buttontext:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center'
    }
});

export default PreviousNextButton;