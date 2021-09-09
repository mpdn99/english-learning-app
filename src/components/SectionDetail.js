import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AnswerCard from "./AnswerCard";

const SectionDetail = ({section, topic, answer1, answer2, answer3, answer4, value1, value2, value3, value4}) => {
    const[isSelected, setSelection] = React.useState(null);
    const[checked, setChecked] = useState(null);
    const[done, setDone] = useState(null);
    const[show, setShow] = useState(false);

    useEffect(() => {
        if(checked!=null){
            setDone('Completed')
        }else{
            setDone('Incompleted')
        }  
    }, [checked])

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
                    <View style={{marginLeft: 10}}>
                        <AnswerCard 
                            title1={answer1}
                            title2={answer2}
                            title3={answer3}
                            title4={answer4}
                            value1={value1}
                            value2={value2}
                            value3={value3}
                            value4={value4}
                            checked={checked}
                            setChecked={setChecked}
                        />
                    </View>
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
        color: 'gray'
    }
})

export default SectionDetail;