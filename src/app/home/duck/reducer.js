
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
                data: null,
                isDone:false,
                isError:true,
                isLoading:true ///todo CHANGE THIS, THIS IS BAD
            }
        default:
            return state;
    }
}