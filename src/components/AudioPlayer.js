import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {} from '@react-native-community/slider';
import PlayButton from './Audio Player/PlayButton';
import SoundPlayer from 'react-native-sound-player'

const AudioPlayer = ({partAudio}) => {
    const [isAlreadyPlay, setisAlreadyPlay] = useState(false);
    const [inprogress, setInprogress] = useState(false);

    useEffect(() => {
        SoundPlayer.stop();
        setisAlreadyPlay(false)
    }, [partAudio])

    const playSong = () => {
        try {
            SoundPlayer.playUrl(partAudio)
        } catch (e) {
            alert('Cannot play the file')
            console.log('cannot play the song file', e)
        }
    }

    const getInfo = async () => {
        try {
            const info = await SoundPlayer.getInfo() // Also, you need to await this because it is async
            console.log('getInfo', info) // {duration: 12.416, currentTime: 7.691}
          } catch (e) {
            console.log('There is no song playing', e)
          }
    }

    const onStartPress = () => {
        setisAlreadyPlay(true);
        if(inprogress){
            SoundPlayer.resume();
            getInfo();
        }else{
            playSong();
            setInprogress(true);
        }

    }

    const onPausePress = () => {
        setisAlreadyPlay(false);
        SoundPlayer.pause();
    }
    return(
        <>
        {isAlreadyPlay?
        (
            <PlayButton name="pause" onPress={onPausePress}/>
        ):(
            <PlayButton name="play" onPress={onStartPress}/>
        )}

        </>
    )
}

export default AudioPlayer

const styles = StyleSheet.create({

})
