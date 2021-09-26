import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AnswerCard from "./AnswerCard";
import AnswerRadioButton from "./AnswerRadioButton";
import getAnswerData from "../services/getAnswerData";
import { RadioButton } from "react-native-paper";

const SectionDetail = ({section, topic, question, userAnswers, setUserAnswers}) => {
    const[done, setDone] = useState(null);
    const[show, setShow] = useState(false);
    const [answers, setAnswers] = useState([])
    const [value, setValue] = useState();

    useEffect(() => {
        getAnswerData(question, setAnswers)
    }, [])

    useEffect(() => {
        if(value!=null){
            setDone('Completed')
            // const point = answers.map((a) => {
            //     if(a.answer_id === value) return console.log('true')
            // })
            const userAnswer = [{
                question_id: question,
                answer_id: value,
                point: answers.find(a => a.answer_id === value).is_correct
            }]
            const userAnswerExist = userAnswers.some(ua => ua.question_id === question);
            // console.log(userAnswers)
            if(userAnswerExist){
                setUserAnswers(userAnswers.map((ua => {
                    if(ua.question_id !== question) return ua
                    return {...ua, answer_id: value, point: answers.find(a => a.answer_id === value).is_correct}
                })))
            }else{
                setUserAnswers(a => a.concat(userAnswer))
            }

        }else{
            setDone('Incompleted')
        }  
    }, [value])

    const dropDown = () => {
        setShow(!show);
    }
    return (
        <>
            <TouchableOpacity style={styles.viewform} onPress={dropDown}>
                <View style={styles.viewform2}>
                    <Text style={styles.topText}>
                        {section}.{' '}{topic}
                    </Text>
                    <Text style={styles.bottomText}>
                        {done}
                    </Text>
                </View>
                {
                    show?(
                        <MaterialIcons name='chevron-left' size={26} style={{marginRight: 20}}/>
                    ):(
                        <MaterialIcons name='expand-more' size={26} style={{marginRight: 20}}/>
                    )
                }
            </TouchableOpacity>
            {
                show?(
                    <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value} style={{marginLeft: 10}}>
                        {

                            answers.map((a, index) => {
                                return(
                                    <AnswerRadioButton
                                    key={index}
                                    value={a.answer_id}
                                    title={a.title}
                                    />
                                )
                            })
                        }
                    </RadioButton.Group>
                ): (null)
            }
        </>
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
        color: 'gray',
    }
})

export default SectionDetail;