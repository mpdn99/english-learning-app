import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert } from 'react-native'

const SectionName = ({section, topic, min, part}) => {
    return (
        <View style={styles.viewform}>
            <Text style={styles.topText}>
                Part {section}: {topic}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    viewform: {
        flex: 1,
        marginLeft: 20,
        marginVertical: 10
    },
    topText: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    bottomText: {
        fontSize: 12,
        color: 'gray'
    }
})

export default SectionName;