
import {WEATHER_LOADING, WEATHER_LOADED, WEATHER_FAILED} from './actions';

const initialState = {
    isLoading:true,
    isDone:false,
    isError:false,
    data:null,
    message:'',
}

export default (state = initialState, action) =>{
    switch(action.type){
        case WEATHER_LOADING:
            return {
                ...state,
                isLoading:true,
                isDone:false,
                isError:false,
            }
        case WEATHER_LOADED:
            return {
                ...state,
                data:action.payload,
                isLoading:false,
                isDone:true,
                isError:false,
            }
        case WEATHER_FAILED:
            return {
                ...state,
                message:action.payload,
                isDone:false,
                isError:true,
                isLoading:false,
                data: null,
            }
        default:
            return state;
    }
}

export function getWeatherView(state){
    const weather = state.home;

    const mainWeather = weather.data !== null ? weather.data.weather[0] : null;
    const weatherView = {
        isLoading:weather.isLoading,
        isLoaded:weather.isLoaded,
        isError:weather.isError,
        message: weather.message,
        data:{
            icon: mainWeather ? mainWeather.icon : '',
            currentLocation: weather.data ? weather.data.name : '',
            currentWeather: mainWeather ? mainWeather.main : '',
            currentWeatherDescription:mainWeather ? mainWeather.description : '' ,
            temperature: weather.data ? weather.data.main.temp : '',
            pressure:weather.data ? weather.data.main.pressure : '',
            humidity: weather.data ? weather.data.main.humidity : '',
        }
    };
    return weatherView;
  }