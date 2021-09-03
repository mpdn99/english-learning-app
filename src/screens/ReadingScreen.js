import React from 'react';
import {SafeAreaView ,StyleSheet, View, Text, Dimensions, ScrollView} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ReturnTestScreen from '../components/ReturnTestScreen';
import LinearGradient from 'react-native-linear-gradient';
import DropDownPicker from 'react-native-dropdown-picker';

const ReadingScreen = ({navigation}) => {

  //Dropdown Menu
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(null);
  const [items, setItems] = React.useState([
    {label: 'Chapter 1', value: '1'},
    {label: 'Chapter 2', value: '2'},
    {label: 'Chapter 3', value: '3'},
    {label: 'Chapter 4', value: '4'},
    {label: 'Chapter 5', value: '5'},
  ]);
  /////////////////////

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
        <LinearGradient
          colors={['white', '#D2DFFF']}
          style={styles.bottomMenu}>
          <DropDownPicker
            placeholder='CHAPTERS'
            style={styles.chooseChap}
            showArrowIcon={false}
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
          />
          <MaterialIcons name='lightbulb' size={30} color='#6360FF'/>
          <Text style={{fontSize: 30, color: '#6360FF'}}>Aa</Text>
        </LinearGradient>
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
    backgroundColor: 'white',
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
    paddingVertical: 30,
    paddingHorizontal: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chooseChap: {
    width: 250,
    height: 70,
    paddingHorizontal: 80,
    borderColor: '#6360FF',
    borderWidth: 1.5,
    backgroundColor: '#D2DFFF'
  }
});

export default ReadingScreen;
