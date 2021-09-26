import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Checkbox, RadioButton } from "react-native-paper";

const AnswerRadioButton = ({value, title}) => {
    return (
        <View style={{flexDirection: 'row', marginLeft: 20, marginVertical: 2}}>
            <RadioButton
                value={value}
            />
            <Text
                numberOfLines={2}
                ellipsizeMode='tail'
                style={{
                    alignSelf: 'center',
                    flex: 0.95,
                    fontSize: 14
                }}
            > {title}</Text>
        </View>
    )
}

export default AnswerRadioButton

const styles = StyleSheet.create({})
