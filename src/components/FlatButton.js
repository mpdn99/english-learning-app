import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    Alert,
    Dimensions
} from 'react-native';

const FlatButton = props => {
    const styleForButton = (
        <View style={[styles.button, {backgroundColor: props.color}]}>
            <Text style={styles.buttontext}>
                {props.text}
            </Text>
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
        paddingVertical: 10,
        paddingHorizontal: 10,
        justifyContent: 'center',
        marginTop: 10,
    },
    buttontext:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center'
    }
});

export default FlatButton;