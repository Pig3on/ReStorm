import { CHANGE_CURRENT_CITY } from "./actions";


const initialState = {
    currentCity: {
        name:"Zagreb",value:"zagreb"
    },
    cities:[
        {name:"Use My Location",value: null},
        {name:"Zagreb",value:"zagreb"},
        {name:"Osijek",value:"osijek"},
        {name:"Rijeka",value:"rijeka"},
        {name:"Korcula",value:"korcula"},
    ]
}

export default (state = initialState, action) =>{
    switch(action.type){
        case CHANGE_CURRENT_CITY:
            return {
                ...state,
                currentCity: action.payload,
            }
        default:
            return state;
    }
}