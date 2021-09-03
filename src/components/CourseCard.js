import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'

const CourseCard = ({title, category, onPress}) => {
    return (
        <TouchableOpacity
            style={styles.courseCard}
            onPress={onPress}
        >
            <Image source={require('../images/Frame24.png')} style={{height: 60, width: 60, marginRight: 15, borderRadius: 15}}></Image>
            <View style={{flexDirection: 'column', flexShrink: 1}}>
            <Text>{title}</Text>
            <Text style={{color:'#91919F'}}>{category}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default CourseCard

const styles = StyleSheet.create({
    courseCard: {
        height: 90,
        width: '80%',
        backgroundColor: '#F5F5F5',
        alignSelf:'center',
        alignItems:'center',
        flexDirection:'row',
        borderRadius: 10,
        padding: 15,
        margin: 10,

    }
})
