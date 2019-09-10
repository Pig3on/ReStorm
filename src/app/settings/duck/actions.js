export const CHANGE_CURRENT_CITY = 'CHANGE_CURRENT_CITY';
export const REFRESH_CITIES = 'REFRESH_CITIES';
export function changeCurrentCityAction(city) {
  return {
    type: CHANGE_CURRENT_CITY,
    payload: city,
  };
}

export function refreshCitiesAction(cities) {
  return {
    type: REFRESH_CITIES,
    payload: cities,
  };
}
