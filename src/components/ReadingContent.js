import React from "react";
import {StyleSheet, Text, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const ReadingContent = ({value, topic, content}) => {
    
    if (value == 1) {
        topic = 'Part 1'
        content = `It was previously believed that dinosaurs were cold-blooded creatures, like reptiles. However, a recent discovery has led researchers to believe they may have been warm-blooded. The fossilized remains of a 66 million-year-old dinosaur’s heart were discovered and examined by x-ray. The basis for the analysis that they were warm-blooded is the number of chambers in the heart as well as the existence of a single aorta. Most reptiles have three chambers in their hearts, although some do have four. But those that have four chambers, such as the crocodile, have two arteries to mix the oxygen-heavy blood with oxygen-lean blood.
        Reptiles are cold-blooded, meaning that they are dependent on the environment for body heat. Yet the fossilized heart had four chambers in the heart as well as a single aorta. The single aorta means that the oxygen-rich blood was completely separated from the oxygen-poor blood and sent through the aorta to all parts of the body.
        Mammals, on the other hand, are warm-blooded, meaning that they generate their own body heat and are
        thus more tolerant of temperature extremes. Birds and mammals, because they are warm blooded, move
        more swiftly and have greater physical endurance than reptiles.
        Scientists believe that the evidence now points to the idea that all dinosaurs were actually warm-blooded.
        Ironically, the particular dinosaur in which the discovery was made was a Tescelosaurus, which translates
        to “marvelous lizard”. A lizard, of course, is a reptile.`
    } else if (value == 2) {
        topic = 'Part 2'
        content = `Sometimes people worry about the germs that they come into contact with daily. In fact, most people would
        be surprised to learn just how many microbes actually inhabit a human’s body at any given time, in addition
        to the larger visitors that come around occasionally. Such natural species that regularly come into contact
        with our bodies include mites, lice, yeast, and fungus, just to name a few. We are, in fact, an ecosystem
        much like a rain forest is to the natural flora and fauna that call it home.
        Lice, or nits, are particularly horrible to even think about. To learn that one’s child has been found in school
        with head lice can cause trauma and shame. People think that having lice is a symptom of being unclean,
        although one can be infected by contact with somebody else who has them. Although lice are not that
        common in general circles, children can easily acquire them just because of their close contact with other
        children at school or play. Some large cities host high-priced nit pickers who make a living removing head
        lice from children.
        Mites on the human body are much more common, and cleanliness does not eliminate the chance of having
        them. They are also microscopic, so they are invisible to the naked eye. There are a number of different
        species of mites, two of which have the human face as their natural habitat, particularly the skin of the
        forehead. Others are very content among human hair, living among the follicles of the eyelashes, eyebrows,
        and scalp hair.`
    } else if (value == 3) {
        topic = 'Topic 3 has a name here'
        content = 'Đề bài: Suy ngẫm về kỉ lục – bệnh hình thức và sự lãng phí thông qua câu chuyện Tô hủ tiếu lớn nhất Việt Nam nhưng không có giá trị sử dụng, gây lãng phí một lượng lớn thực phẩm. : Dưới đây là những bài văn nghị luận xã hội đạt điểm cao trong kỳ thi thử đại học môn văn lần thứ 7 của trường THPT Đào Duy Từ Bài viết của Đào Thị Thanh Trà - Lớp 12D0'
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.chapterContainer}>
                <View style={{ paddingLeft: 15 }}>
                <Text style={styles.chapterNumber}>Chapter {value}</Text>
                <Text style={styles.chapterName}>{topic}</Text>
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
        fontSize: 15
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