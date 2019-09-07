import React,{useEffect} from 'react';
import HomeScreen from './HomeScreen';
import { withNavigation, withNavigationFocus } from 'react-navigation';
import {connect} from 'react-redux';
import { compose } from 'redux';
import { getWeatherAsyncAction } from './duck/actions';

const HomeContainer = ({navigation,currentCity,getWeather,weather}) => {
    const navigateToSettings = () =>{
        navigation.navigate("Settings");
    }
    useEffect(()=>{
            getWeather(currentCity);
    },[currentCity]);
    return (
         <HomeScreen weather={weather} navigateToSettings={navigateToSettings}/>
    );
}


const mapStateToProps = state => ({
    currentCity: state.settings.currentCity,
    weather: state.home,
});
  const mergeProps = (stateProps, dispatchProps, ownProps) => {
    return {
      ...ownProps,
      ...stateProps,
      ...dispatchProps,
    };
  };
  const mapDispatchToProps = dispatch => ({
      getWeather: (city) => dispatch(getWeatherAsyncAction(city)),
      dispatch,
  })
 
  const enhance = compose(
      withNavigation,
      connect(mapStateToProps,mapDispatchToProps,mergeProps)
  );
 
export default enhance(HomeContainer);