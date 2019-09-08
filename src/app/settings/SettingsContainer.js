import React from 'react';
import SettingsScreen from './SettingsScreen';
import { withNavigation } from 'react-navigation';
import {connect} from 'react-redux';
import {changeCurrentCityAction, refreshCitiesAction} from './duck/actions';
const SettingsContainer = ({navigation,settings,changeCurrentCity,refreshCities}) => {

    const addNewCity = (value) =>{
        const cities = settings.cities;
        const cityValue = value.replace(/\s/g,'').toLowerCase();
        const newCity = {name: value, value:cityValue}
        cities.push(newCity);
        refreshCities(cities);
    }

    return (
        <SettingsScreen addNewCity={addNewCity} goBack={navigation.goBack} changeCurrentCity={changeCurrentCity} settings={settings}/>
    );
}

const mapStateToProps = state => ({
    settings: state.settings
});
const mergeProps = (stateProps, dispatchProps, ownProps) => {
    return {
        ...ownProps,
        ...stateProps,
        ...dispatchProps,
    };
};
const mapDispatchToProps = dispatch => ({
    changeCurrentCity: (city) => dispatch(changeCurrentCityAction(city)),
    refreshCities: (cities) => dispatch(refreshCitiesAction(cities)),
    dispatch,
})
  

export default connect(mapStateToProps,mapDispatchToProps,mergeProps)(withNavigation(SettingsContainer));