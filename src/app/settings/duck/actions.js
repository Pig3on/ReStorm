
export const CHANGE_CURRENT_CITY =  'CHANGE_CURRENT_CITY';

export function changeCurrentCityAction(city) {
    return {
        type:CHANGE_CURRENT_CITY,
        payload:city,
    }
}
//todo api calls