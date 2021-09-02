import React from 'react';
import {SafeAreaView ,StyleSheet, View, Text, Dimensions, ScrollView} from 'react-native';
import CourseCard from '../components/CourseCard';
import HeaderBar from '../components/HeaderBar';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ReturnTestScreen from '../components/ReturnTestScreen';
import TestScreen from './TestScreen';
// import { ScrollView } from 'react-native-gesture-handler';

const ReadingScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.bodyContainer}>
        <ReturnTestScreen title='Science with Craft'
                          iconColor='black'
                          navigation={navigation}/>
        <View style={styles.chapterContainer}>
            <View style={{ paddingLeft: 15 }}>
              <Text style={styles.chapterNumber}>Chapter 1</Text>
              <Text style={styles.chapterName}>Something here is a name</Text>
            </View>
            <MaterialIcons style={styles.bookmark} name='bookmark' size={28} color='red'/>
        </View>
        <ScrollView style={{marginTop: 20}}>
          <Text style={styles.chapterContent}>
            Bài văn xúc động người đọc bởi cảm xúc chân thành từ chính tình cảm của con dành cho người cha tần tảo của mình. Cô giáo đã chấm cho Hậu 9,5 điểm với lời nhận xét: “Em là một người con ngoan, bài viết của em đã làm cho cô rất xúc động. Điều đáng quý nhất của em là tình cảm chân thực và em có một trái tim nhân hậu. Em đã cho cô một bài học làm người. Mong rằng đây không chỉ là trang văn mà còn là sự hành xử của em trong cuộc đời”. Được biết, thầy Lê Trần Bân, hiệu phó trường THPT Huỳnh Thúc Kháng đã đọc bài văn trong lễ chào cờ đầu tuần, trước toàn trường.
            Bài văn xúc động người đọc bởi cảm xúc chân thành từ chính tình cảm của con dành cho người cha tần tảo của mình. Cô giáo đã chấm cho Hậu 9,5 điểm với lời nhận xét: “Em là một người con ngoan, bài viết của em đã làm cho cô rất xúc động. Điều đáng quý nhất của em là tình cảm chân thực và em có một trái tim nhân hậu. Em đã cho cô một bài học làm người. Mong rằng đây không chỉ là trang văn mà còn là sự hành xử của em trong cuộc đời”. Được biết, thầy Lê Trần Bân, hiệu phó trường THPT Huỳnh Thúc Kháng đã đọc bài văn trong lễ chào cờ đầu tuần, trước toàn trường.
            Bài văn xúc động người đọc bởi cảm xúc chân thành từ chính tình cảm của con dành cho người cha tần tảo của mình. Cô giáo đã chấm cho Hậu 9,5 điểm với lời nhận xét: “Em là một người con ngoan, bài viết của em đã làm cho cô rất xúc động. Điều đáng quý nhất của em là tình cảm chân thực và em có một trái tim nhân hậu. Em đã cho cô một bài học làm người. Mong rằng đây không chỉ là trang văn mà còn là sự hành xử của em trong cuộc đời”. Được biết, thầy Lê Trần Bân, hiệu phó trường THPT Huỳnh Thúc Kháng đã đọc bài văn trong lễ chào cờ đầu tuần, trước toàn trường.
            Bài văn xúc động người đọc bởi cảm xúc chân thành từ chính tình cảm của con dành cho người cha tần tảo của mình. Cô giáo đã chấm cho Hậu 9,5 điểm với lời nhận xét: “Em là một người con ngoan, bài viết của em đã làm cho cô rất xúc động. Điều đáng quý nhất của em là tình cảm chân thực và em có một trái tim nhân hậu. Em đã cho cô một bài học làm người. Mong rằng đây không chỉ là trang văn mà còn là sự hành xử của em trong cuộc đời”. Được biết, thầy Lê Trần Bân, hiệu phó trường THPT Huỳnh Thúc Kháng đã đọc bài văn trong lễ chào cờ đầu tuần, trước toàn trường.
            Bài văn xúc động người đọc bởi cảm xúc chân thành từ chính tình cảm của con dành cho người cha tần tảo của mình. Cô giáo đã chấm cho Hậu 9,5 điểm với lời nhận xét: “Em là một người con ngoan, bài viết của em đã làm cho cô rất xúc động. Điều đáng quý nhất của em là tình cảm chân thực và em có một trái tim nhân hậu. Em đã cho cô một bài học làm người. Mong rằng đây không chỉ là trang văn mà còn là sự hành xử của em trong cuộc đời”. Được biết, thầy Lê Trần Bân, hiệu phó trường THPT Huỳnh Thúc Kháng đã đọc bài văn trong lễ chào cờ đầu tuần, trước toàn trường.
            Bài văn xúc động người đọc bởi cảm xúc chân thành từ chính tình cảm của con dành cho người cha tần tảo của mình. Cô giáo đã chấm cho Hậu 9,5 điểm với lời nhận xét: “Em là một người con ngoan, bài viết của em đã làm cho cô rất xúc động. Điều đáng quý nhất của em là tình cảm chân thực và em có một trái tim nhân hậu. Em đã cho cô một bài học làm người. Mong rằng đây không chỉ là trang văn mà còn là sự hành xử của em trong cuộc đời”. Được biết, thầy Lê Trần Bân, hiệu phó trường THPT Huỳnh Thúc Kháng đã đọc bài văn trong lễ chào cờ đầu tuần, trước toàn trường.
            Bài văn xúc động người đọc bởi cảm xúc chân thành từ chính tình cảm của con dành cho người cha tần tảo của mình. Cô giáo đã chấm cho Hậu 9,5 điểm với lời nhận xét: “Em là một người con ngoan, bài viết của em đã làm cho cô rất xúc động. Điều đáng quý nhất của em là tình cảm chân thực và em có một trái tim nhân hậu. Em đã cho cô một bài học làm người. Mong rằng đây không chỉ là trang văn mà còn là sự hành xử của em trong cuộc đời”. Được biết, thầy Lê Trần Bân, hiệu phó trường THPT Huỳnh Thúc Kháng đã đọc bài văn trong lễ chào cờ đầu tuần, trước toàn trường.
            Bài văn xúc động người đọc bởi cảm xúc chân thành từ chính tình cảm của con dành cho người cha tần tảo của mình. Cô giáo đã chấm cho Hậu 9,5 điểm với lời nhận xét: “Em là một người con ngoan, bài viết của em đã làm cho cô rất xúc động. Điều đáng quý nhất của em là tình cảm chân thực và em có một trái tim nhân hậu. Em đã cho cô một bài học làm người. Mong rằng đây không chỉ là trang văn mà còn là sự hành xử của em trong cuộc đời”. Được biết, thầy Lê Trần Bân, hiệu phó trường THPT Huỳnh Thúc Kháng đã đọc bài văn trong lễ chào cờ đầu tuần, trước toàn trường.
            Bài văn xúc động người đọc bởi cảm xúc chân thành từ chính tình cảm của con dành cho người cha tần tảo của mình. Cô giáo đã chấm cho Hậu 9,5 điểm với lời nhận xét: “Em là một người con ngoan, bài viết của em đã làm cho cô rất xúc động. Điều đáng quý nhất của em là tình cảm chân thực và em có một trái tim nhân hậu. Em đã cho cô một bài học làm người. Mong rằng đây không chỉ là trang văn mà còn là sự hành xử của em trong cuộc đời”. Được biết, thầy Lê Trần Bân, hiệu phó trường THPT Huỳnh Thúc Kháng đã đọc bài văn trong lễ chào cờ đầu tuần, trước toàn trường.
          </Text>
        </ScrollView>
      </View>
      <View style={styles.bottomMenu}>
          <Text>yyyyyyyyyyyyyyyyyyyyyyyyyy</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#6360FF'
  },
  bodyContainer: {
    flex: 1,
    backgroundColor: '#F1F1FA',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    height: 700,
  },
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
    fontWeight: 'bold'
  },
  bookmark: {
    alignSelf: 'center',
    marginLeft: Dimensions.get('window').width*1/3.75
  },
  chapterContent: {
    fontSize: 16,
    color: 'black',
    marginLeft: 30,
    marginRight: 10,
  },
  bottomMenu: {
    height: Dimensions.get('window').height*1/10,
    width: Dimensions.get('window').width,
    backgroundColor: 'green',
    position: 'absolute',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: Dimensions.get('window').height*9/10
  }
});

export default ReadingScreen;
