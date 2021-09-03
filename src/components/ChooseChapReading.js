import React from "react";
import LinearGradient from "react-native-linear-gradient";
import DropDownPicker from "react-native-dropdown-picker";
import { StyleSheet } from "react-native";

const ChooseChapReading = () => {

    //Dropdown Menu Data
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
    );
}

const styles = StyleSheet.create({
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
})

export default ChooseChapReading;