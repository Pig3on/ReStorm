import React from 'react';
import {View,Text,TouchableOpacity,Image,ScrollView} from 'react-native';


import styles from './HomeStyle';

const HomeScreen = ({weather,navigateToSettings}) => {
    if(weather.isLoading){
        return <View>
            <Text>Loading data</Text>
        </View>
    }
    return  <ScrollView
    contentContainerStyle={styles.mainBox}>
    <View style={styles.titleItem}>
      <Text style={styles.title}>
          ReStorm
      </Text>
    </View>
    <View style={styles.infoItem}>
      <Text style={styles.label}>
            City
      </Text>
      <Text style={styles.value}>
            {weather.data.name}
      </Text>
    </View>
    <View style={styles.infoItem}>
      <Text style={styles.label}>
            Weather
      </Text>
      <Text style={styles.value}>
            {weather.data.weather[0].main},
            {weather.data.weather[0].description}
      </Text>
    </View>
    <View style={styles.infoItem}>
      <Image style={styles.image} 
      source={{uri: `https://openweathermap.org/img/wn/${weather.data.weather[0].icon}@2x.png`}}/>
    </View>
    <View style={styles.infoItem}>
      <Text style={styles.label}>
            Temperature
      </Text>
      <Text style={styles.value}>
            {weather.data.main.temp}°C
      </Text>
    </View>
    <View style={styles.infoItem}>
      <Text style={styles.label}>
            Pressure
      </Text>
      <Text style={styles.value}>
            {weather.data.main.pressure}hPa
      </Text>
    </View>
    <View style={styles.infoItem}>
      <Text style={styles.label}>
            Hummidity
      </Text>
      <Text style={styles.value}>
            {weather.data.main.humidity}%
      </Text>
    </View>
    <TouchableOpacity onPress={navigateToSettings} style={styles.infoItem}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>Settings</Text>
      </View>
    </TouchableOpacity>
  </ScrollView>
}

export default HomeScreen;