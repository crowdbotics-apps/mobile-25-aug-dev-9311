import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen310232Navigator from '../features/BlankScreen310232/navigator';
import BlankScreen110224Navigator from '../features/BlankScreen110224/navigator';
import BlankScreen010206Navigator from '../features/BlankScreen010206/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen310232: { screen: BlankScreen310232Navigator },
BlankScreen110224: { screen: BlankScreen110224Navigator },
BlankScreen010206: { screen: BlankScreen010206Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
