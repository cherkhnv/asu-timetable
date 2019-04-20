/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 * 
 * @format
 */

import { createStackNavigator, createAppContainer } from "react-navigation"
import Home from 'Screens/Home'
import Faculty from 'Screens/Faculty'

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    Faculty: {
      screen: Faculty,
    }
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  }
);

export default createAppContainer(AppNavigator)