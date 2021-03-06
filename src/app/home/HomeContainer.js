import React, {useEffect} from 'react';
import HomeScreen from './HomeScreen';
import {withNavigation} from 'react-navigation';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {getWeatherAsyncAction} from './duck/actions';
import {getWeatherView} from './duck/reducer';
import SplashScreen from 'react-native-splash-screen';
const HomeContainer = ({navigation, currentCity, getWeather, weather}) => {
  const navigateToSettings = () => {
    navigation.navigate('Settings');
  };
  const refreshWeather = () => {
    getWeather(currentCity);
  };
  useEffect(() => {
    SplashScreen.hide();
    getWeather(currentCity);
  }, [currentCity, getWeather]);
  return (
    <HomeScreen
      refreshWeather={refreshWeather}
      weather={weather}
      navigateToSettings={navigateToSettings}
    />
  );
};

const mapStateToProps = state => ({
  currentCity: state.settings.currentCity,
  weather: getWeatherView(state),
});
const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return {
    ...ownProps,
    ...stateProps,
    ...dispatchProps,
  };
};
const mapDispatchToProps = dispatch => ({
  getWeather: city => dispatch(getWeatherAsyncAction(city)),
  dispatch,
});

const enhance = compose(
  withNavigation,
  connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps,
  ),
);

export default enhance(HomeContainer);
