import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList, ActivityIndicator, SafeAreaView, Dimensions, Button } from 'react-native'
import ChooseSkill from '../components/ChooseSkill';
import HeaderBar from '../components/HeaderBar';
import getTestsData from '../services/getTestsData';

const ListTestScreen = ({navigation, route}) => {
    const [tests, setTests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [screen, setScreen] = useState()
    useEffect(() => {
        getTestsData(setTests, setLoading, route.params)
        if(route.params === 1){
            setScreen('Listening')
        }
        if(route.params === 2){
            setScreen('Reading')
        }
        return () => {
            setScreen()
        }
    }, []);
    return (
        <SafeAreaView style={styles.screenContainer}>
            <HeaderBar title="Tests" navigation={navigation}/>
            <View style={styles.bodyContainer}>
            <Text 
                style={{fontSize: 16,
                        fontWeight: 'bold',
                        marginVertical: 20,
                        marginHorizontal: Dimensions.get('window').width*1/7
                }}
            >
                Available Test
            </Text>
            {
                loading?(
                    <ActivityIndicator size="large" style={styles.loading}/>
                ):(
                    <FlatList
                    data={tests}
                    renderItem={({ item }) => (
                        <View>
                                    <ChooseSkill
                                    skill={item.title}
                                    navigation={navigation}
                                    screen={screen}
                                    icon='face'
                                    color='blue'
                                    params={{test_id: item.test_id}}
                                    />
                        </View>
                    )}
                    />
                )
            }
            </View>
          </SafeAreaView>

    )
}

export default ListTestScreen

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: '#6360FF'
      },
      bodyContainer: {
        flex: 2,
        backgroundColor: 'white',
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        paddingTop: 20
      },
      loading: {
          flex:2
      }
})
