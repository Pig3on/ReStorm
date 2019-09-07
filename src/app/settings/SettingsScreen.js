import React from 'react';
import {View,Text,TouchableOpacity,FlatList} from 'react-native';
import styles from './SettingsStyles';


const renderSettingsItem = (item,changeCurrentCity) => {

    return <TouchableOpacity onPress={()=>{changeCurrentCity(item.item)}} >
        <Text style={styles.listItemText}>{item.item.name}</Text>
    </TouchableOpacity>
}
const SettingsScreen = ({settings,goBack,changeCurrentCity}) => {
    return <View style={styles.mainBox}>
        <View>
            <Text style={styles.currentCityLabel}>Current City:</Text>
            <Text style={styles.currentCityText}>{settings.currentCity.name}</Text>
        </View>
            <Text style={styles.changeCityLabel}>Change City: </Text>
            <FlatList 
            style={styles.list} 
            keyExtractor={(item,index) => {return index.toString()}}
            data={settings.cities} 
            renderItem={(item)=> renderSettingsItem(item,changeCurrentCity)} />
    </View>
}

export default SettingsScreen;