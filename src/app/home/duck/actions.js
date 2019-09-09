export const WEATHER_LOADING = 'WEATHER_LOADING';
export const WEATHER_LOADED = 'WEATHER_LOADED';
export const WEATHER_FAILED = 'WEATHER_FAILED';
const API_KEY = '06142144e99a703512af3cb28ba80ca8';
import {PermissionsAndroid,Platform} from 'react-native';


import Geolocation from '@react-native-community/geolocation';


export const weatherLoadingAction = () => {
    return {
        type:WEATHER_LOADING,
    }
}
export const weatherLoadedAction = (data) => {
    return {
        type:WEATHER_LOADED,
        payload:data
    }
}
export const weatherFailedAction = (message) => {
    return {
        type:WEATHER_FAILED,
        payload:message,
    }
}



export function getWeatherAsyncAction(currentCity){
    return async dispatch => {
        try{
            dispatch(weatherLoadingAction());
            let weather = null;
            if(currentCity.value === null){
                weather = await getWeatherByGps();
            }else{
                weather = await fetchWeatherByCityName(currentCity.value);
            }
            
            let response = await weather.json();
            if(response.cod && response.cod != '200'){
                 throw Error("No data for requested city")
            }
            dispatch(weatherLoadedAction(response));
        }catch(e){
            dispatch(weatherFailedAction("There has been an error fetching data: "+ e.message));
        }
    }
}

async function getWeatherByGps(){
    const granted = Platform.OS === 'ios' ? true : await requestLocationPermission();

    if(granted){
        const result = await getLocation();
        return await fetchWeatherByGps(result.coords.latitude,result.coords.longitude);
    }
}
async function requestLocationPermission(){
    const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
            title:'Location permission',
            message:"This application needs to access your location so it can get weather info based on your location",
            buttonNeutral:"Ask me later",
            buttonNegative:"Cancel",
            buttonPositive:"Ok"
        }
    )
   return granted == PermissionsAndroid.RESULTS.GRANTED;
}
function getLocation(){
    return new Promise((resolve,reject)=>{
        Geolocation.setRNConfiguration({});
        result = Geolocation.getCurrentPosition(
            (successData)=>{
                resolve(successData)
            },
            (errorData)=>{
                reject(errorData);
            }
        );
    })

}

async function fetchWeatherByCityName(name){
  return  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}&units=metric`);
}
async function fetchWeatherByGps(lat,long){
    return  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`);
  }


  //selectors

