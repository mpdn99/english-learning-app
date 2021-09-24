import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Checkbox, RadioButton } from "react-native-paper";

const AnswerRadioButton = ({value, title}) => {
    return (
        <View style={{flexDirection: 'row', marginLeft: 20}}>
            <RadioButton
                value={value}
            />
            <Text style={{margin: 7}}> {title}</Text>
        </View>
    )
}

export default AnswerRadioButton

const styles = StyleSheet.create({})
