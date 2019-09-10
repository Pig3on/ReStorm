import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  RefreshControl,
} from 'react-native';

import styles from './HomeStyle';

const HomeScreen = ({weather, navigateToSettings, refreshWeather}) => {
  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={weather.isLoading}
          onRefresh={refreshWeather}
        />
      }
      contentContainerStyle={styles.mainBox}>
      {!weather.isLoading && !weather.isError && (
        <View style={styles.infoBox}>
          <View style={styles.titleItem}>
            <Text style={styles.title}>ReStorm</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.label}>Location</Text>
            <Text style={styles.value}>{weather.data.currentLocation}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.label}>Weather</Text>
            <Text style={styles.value}>{weather.data.currentWeather}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.label}>Description</Text>
            <Text style={styles.value}>
              {weather.data.currentWeatherDescription}
            </Text>
          </View>
          <View style={styles.infoItem}>
            <Image
              style={styles.image}
              source={{
                uri: `https://openweathermap.org/img/wn/${
                  weather.data.icon
                }@2x.png`,
              }}
            />
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.label}>Temperature</Text>
            <Text style={styles.value}>{weather.data.temperature}°C</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.label}>Pressure</Text>
            <Text style={styles.value}>{weather.data.pressure}hPa</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.label}>Hummidity</Text>
            <Text style={styles.value}>{weather.data.humidity}%</Text>
          </View>
        </View>
      )}
      {weather.isError && (
        <View style={styles.infoBox}>
          <Text>{weather.message}</Text>
        </View>
      )}
      {weather.isLoading && (
        <View style={styles.infoBox}>
          <Text>Loading data</Text>
        </View>
      )}
      <View style={styles.infoButton}>
        <TouchableOpacity onPress={navigateToSettings} style={styles.infoItem}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Settings</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
