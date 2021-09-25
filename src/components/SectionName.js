import React from "react";
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const SectionName = ({section, topic, onPress}) => {
    return (
        <TouchableOpacity style={styles.viewform} onPress={onPress}>
            <Text style={styles.topText}>
                Part {section}: {topic}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    viewform: {
        flex: 1,
        paddingLeft: 20,
        paddingVertical: 15,
        backgroundColor: '#F1F1FA'
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