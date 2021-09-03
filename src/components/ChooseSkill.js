import * as React from 'react';
import { Button } from 'react-native-paper';
import { Dimensions, StyleSheet, Text} from 'react-native';

const ChooseSkill = ({navigation, screen, skill, icon, color}) => {
    const goTo = () => {
        navigation.navigate(screen);
    }
    return (
        <Button
            color={color}
            icon={icon}
            mode='outlined'
            onPress={goTo}
            style={[styles.styleButton, {borderColor: color}]}>
            {skill}
        </Button>
    )
}

const styles = StyleSheet.create({
    styleButton: {
        paddingVertical: Dimensions.get('window').height/30,
        marginHorizontal: 50,
        marginVertical: 20,
        borderWidth: 1,
        borderRadius: 20,
    }
})

export default ChooseSkill;