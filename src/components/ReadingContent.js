import React, {useEffect} from "react";
import {StyleSheet, Text, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const ReadingContent = ({value, content}) => {

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.chapterContainer}>
                <View style={{ paddingLeft: 15 }}>
                <Text style={styles.chapterNumber}>Passage {value}</Text>
                {/* <Text style={styles.chapterName}>{topic}</Text> */}
                </View>
            </View>
            <ScrollView style={{marginTop: 20}}>
                <Text style={styles.chapterContent}>
                    {content}
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create ({
    chapterContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        margin: 20,
        marginBottom: 10
    },
    chapterNumber: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold'
    },
    chapterName: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 5
    },
    chapterContent: {
        fontSize: 16,
        color: 'black',
        marginLeft: 30,
        marginRight: 10,
    },
})

export default ReadingContent;