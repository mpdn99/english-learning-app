import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    Alert,
    Dimensions
} from 'react-native';

const PreviousNextButton = ({title, color, pressed}) => {
    return (
        <TouchableOpacity
            style={[styles.button, {backgroundColor: color}]}
            onPress={() => Alert.alert(pressed)}>
            <Text style={styles.buttontext}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        flex: 1,
        borderRadius: 10,
        height: 60,
        paddingTop: 20,
        marginTop: 20,
        marginHorizontal: 10,
    },
    buttontext:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center'
    }
});

export default PreviousNextButton;