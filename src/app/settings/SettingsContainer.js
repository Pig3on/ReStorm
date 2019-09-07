import React from 'react';
import SettingsScreen from './SettingsScreen';
import { withNavigation } from 'react-navigation';
import {connect} from 'react-redux';
import {changeCurrentCityAction} from './duck/actions';
const SettingsContainer = ({navigation,settings,changeCurrentCity}) => {
    return (
        <SettingsScreen goBack={navigation.goBack} changeCurrentCity={changeCurrentCity} settings={settings}/>
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
    dispatch,
})
  

export default connect(mapStateToProps,mapDispatchToProps,mergeProps)(withNavigation(SettingsContainer));