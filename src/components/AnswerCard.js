import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AnswerRadioButton from './AnswerRadioButton';

const AnswerCard = ({title1, title2, title3, title4, value1, value2, value3, value4, checked, setChecked}) => {
    return (
        <View style={{marginLeft: 10}}>
            <AnswerRadioButton value={value1} checked={checked} onPress={() => setChecked(value1)} title={`A. ${title1}`}/>
            <AnswerRadioButton value={value2} checked={checked} onPress={() => setChecked(value2)} title={`B. ${title2}`}/>
            <AnswerRadioButton value={value3} checked={checked} onPress={() => setChecked(value3)} title={`C. ${title3}`}/>
            <AnswerRadioButton value={value4} checked={checked} onPress={() => setChecked(value4)} title={`D. ${title4}`}/>
        </View>
    )
}

export default AnswerCard

const styles = StyleSheet.create({})
