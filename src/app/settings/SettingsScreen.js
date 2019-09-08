import React, {useState} from 'react';
import {View,Text,TouchableOpacity,FlatList,Modal,TextInput} from 'react-native';
import styles from './SettingsStyles';


const renderSettingsItem = (item,changeCurrentCity) => {

    return <TouchableOpacity style={styles.listItemButton} onPress={()=>{changeCurrentCity(item.item)}} >
        <Text style={styles.listItemText}>{item.item.name}</Text>
    </TouchableOpacity>
}

const InsertCityModal = ({isModalVisible,requestCancel,requestConfirm}) =>{
    const [value,setValue] = useState('');
    return <Modal
    animationType="slide"
    transparent={false}
    visible={isModalVisible}
    onRequestClose={requestCancel}>
    <View style={{marginTop: 22}}>
      <View>
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => setValue(text)}
            value={value}
            />
        <TouchableOpacity
          onPress={()=>{requestConfirm(value); setValue('')}}>
          <Text>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=>{requestCancel();setValue('')}}>
          <Text>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  </Modal>
}

const SettingsScreen = ({settings,goBack,changeCurrentCity,addNewCity}) => {
    const [isModalVisible,setModalVisible] = useState(false);

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

        <TouchableOpacity style={styles.addCityButton} onPress={()=>{setModalVisible(true)}} >
            <Text style={styles.listItemText}>Add new City</Text>
        </TouchableOpacity>
            <InsertCityModal
             isModalVisible={isModalVisible}
             requestCancel={()=>{setModalVisible(false)}}
             requestConfirm={(value)=>{setModalVisible(false); addNewCity(value)}} />
    </View>
}





export default SettingsScreen;