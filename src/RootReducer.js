import homeReducer from './app/home/duck/reducer';
import settingsReducer from './app/settings/duck/reducer';
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    home:homeReducer,
    settings:settingsReducer,
})


export default rootReducer;

