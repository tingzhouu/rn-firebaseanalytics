import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import Home from './src/Home';
import Settings from './src/Settings';
import Profile from './src/Profile';

const SettingsStack = createStackNavigator({
  Settings: {
    screen: Settings,
  },
  Profile: {
    screen: Profile,
  },
});

const AppNavigator = createBottomTabNavigator({
  Home: {
    screen: Home,
  },
  Settings: {
    screen: SettingsStack,
  },
});

export default createAppContainer(AppNavigator);
