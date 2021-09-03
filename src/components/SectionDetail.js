import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert } from 'react-native'
import { Checkbox } from "react-native-paper";

const SectionDetail = ({section, topic, min}) => {
    
    const[isSelected, setSelection] = React.useState(null);

    return (
        <View style={styles.viewform}>
            <View style={styles.viewform2}>
                <Text style={styles.topText}>
                    {section}.{' '}{topic}
                </Text>
                <Text style={styles.bottomText}>
                    Video{'  '}o{'  '}{min}{' '}min
                </Text>
            </View>
            <Checkbox.Android
                status={isSelected ? 'checked' : 'unchecked'}
                onPress={() => {
                setSelection(!isSelected);
                }}
                color={'#FF8181'}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    viewform: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 2,
        marginVertical: 10
    },
    viewform2: {
        flex: 1,
        marginLeft: 20
    },
    topText: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 5
    },
    bottomText: {
        fontSize: 12,
        color: 'gray'
    }
})

export default SectionDetail;