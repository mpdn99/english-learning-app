import React from 'react';
import {StyleSheet, View, Text, Dimensions, SafeAreaView, Image, Pressable, Alert} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ReturnScreen from '../components/ReturnScreen';
import { WebView } from 'react-native-webview';
import OpenWebView from '../components/OpenWebView';

const AboutScreen = ({navigation}) => {
  
  // const learnMore = () => {
  //   <WebView
  //     source={{ uri: 'https://istech.vn/'}}
  //   />
  // }
  
  return (
      <ScrollView style={styles.screenContainer}>
          <ReturnScreen
                title='About us'
                screen='Setting'
                navigation={navigation}
          />
          <View style={styles.bodyContainer}>
          <Image
            source={require('../images/logoclb.png')}
            style={styles.logo}
            resizeMode='cover'
          />
            <Image
              resizeMode='cover'
              style={styles.photo}
              source={{uri: 'https://istech.vn/wp-content/uploads/2021/08/104706987_145759743767730_3012861106799817953_n-1-1.jpeg'}}
            />
            <Text style={styles.textStyle}>     ISTECH được thành lập từ các bạn sinh viên có đam mê về nghiên cứu khoa học nói chung, là các đại diện đến từ các ngành học khác nhau, từ đó, trong tương lai sẽ giúp CLB phát huy hết tiềm năng của các thành viên trong BTC, cũng như nắm bắt được xu hướng, mức độ quan tâm chung của sinh viên, thành viên tham gia ISTECH. CLB hoạt động dựa trên nguyên tắc tự nguyện tham gia của các thành viên, dân chủ trong hoạt động và quản lý tập trung.</Text>
            <Pressable
              onPress={OpenWebView}
            >
              <Text style={[styles.textStyle, {marginTop: 20, textDecorationLine: 'underline'}]}>Learn more</Text>
            </Pressable>
          </View>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#6360FF'
  },
  bodyContainer: {
    flex: 2,
    backgroundColor: '#6360FF',
    paddingTop: 20,
    borderTopColor: 'white',
    borderTopWidth: 0.3
  },
  partDivide: {
    fontSize: 15,
    color: 'gray',
    padding: 20,
  },
  logo: {
    height: 100,
    width: 200,
    alignSelf: 'center',
    marginTop: 10,
  },
  textStyle: {
    paddingHorizontal: 40,
    fontSize: 15,
    color: 'white',
    alignSelf: 'center',
    fontStyle: 'italic',
  },
  photo: {
    height: 250,
    width: Dimensions.get('window').width-70,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'white',
    marginVertical: 20,
    alignSelf: 'center'
  }
});

export default AboutScreen;
