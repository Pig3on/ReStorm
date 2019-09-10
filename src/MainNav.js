import {createAppContainer} from 'react-navigation';

import HomeContainer from './app/home/HomeContainer';
import {createStackNavigator} from 'react-navigation-stack';
import SettingsContainer from './app/settings/SettingsContainer';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeContainer,
    navigationOptions: {
      headerVisible: false,
      header: null,
    },
  },
  Settings: {
    screen: SettingsContainer,
    navigationOptions: {
      headerStyle: {
        backgroundColor: 'black',
        fontSize: 30,
      },
      headerTintColor: 'white',
    },
  },
});

export default createAppContainer(AppNavigator);
