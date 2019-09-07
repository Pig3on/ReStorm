export const WEATHER_LOADING = 'WEATHER_LOADING';
export const WEATHER_LOADED = 'WEATHER_LOADED';
export const WEATHER_FAILED = 'WEATHER_FAILED';
const API_KEY = '06142144e99a703512af3cb28ba80ca8';
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
                weather = await getWeatherByCityName(currentCity.value);
            }
            let response = await weather.json();

            dispatch(weatherLoadedAction(response));
        }catch(e){
            console.log(e);
            dispatch(weatherFailedAction(e));
        }
    }
}

async function getWeatherByGps(){
    
}

async function getWeatherByCityName(name){
  return  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}&units=metric`);
}