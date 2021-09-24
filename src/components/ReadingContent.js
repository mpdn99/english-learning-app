import React from "react";
import {StyleSheet, Text, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const ReadingContent = ({value, topic, content}) => {
    
    if (value == 1) {
        topic = 'Here is the name of topic 1'
        content = 'Bài Văn điểm 10 thi đại học thức tỉnh các ông bố bà mẹ : Những dòng cảm xúc trên nằm trong bài văn 800 chữ đã đạt điểm 10 tuyệt đối kỳ thi tuyển sinh Đại học của Trung Quốc năm 2016. Bài viết rất đáng suy ngẫm của nam sinh Quảng Đông, Trung Quốc được thầy giáo Trịnh Quỳnh (giáo viên Văn học Trường THPT Lương Thế Vinh, tỉnh Nam Định) dịch và giới thiệu trước thềm kỳ thi THPT Quốc gia 2017 đã nhận được sự quan tâm, chia sẻ lớn của người đọc.'
    } else if (value == 2) {
        topic = 'The name of topic 2'
        content = 'Bài thi Văn điểm tuyệt đối trong kỳ thi Đại học khó nhất thế giới tại Trung Quốc khiến dân mạng chỉ biết thốt lên quá đỉnh : Đề: Dựa theo tài liệu bên dưới, chọn góc độ, tự nghĩ đề bài, viết bài văn trên 800 chữ, không hạn chế thể văn (trừ thơ). "Mỗi vật đều có 1 tính, nước thì nhạt, muối thì mặn. Nước thêm nước vẫn là nước, muối thêm muối vẫn là muối. Chua ngọt cay nhạt mặn, năm vị điều hoà, cùng tồn tại hoà trộn tạo ra trăm ngàn vị khác. Vật đã thế, sự việc cũng thế, con người càng thế."'
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