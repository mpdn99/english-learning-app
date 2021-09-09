import * as React from 'react';
import { Dimensions } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const SettingButton = ({navigation, screen}) => {
    const goTo = () => {
        navigation.navigate(screen);
    }
    return (
        <MaterialIcons
            name='settings'
            size={26}
            color='white'
            style={{
                marginLeft: Dimensions.get('window').width-40,
                marginTop: 25,
                position: 'absolute'
            }}
            onPress={goTo}
        />
    )
}

export default SettingButton;