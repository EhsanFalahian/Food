import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from 'features/drawer/component/content/DrawerContent';
import StackNavigation from 'features/drawer/component/stack/StackNavigation';
import {DrawerRoutes} from './routes';
import palette from 'core/styles/palette';

export type DrawerNavigationParams = {
  [DrawerRoutes.STACK]: undefined;
};

const Drawer = createDrawerNavigator<DrawerNavigationParams>();

const DrawerNavigation = (): JSX.Element => {
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        overlayColor: 'transparent',
        drawerStyle: {width: '50%', backgroundColor: palette.background},
        sceneContainerStyle: {backgroundColor: palette.background},
        drawerType: 'slide',
      }}>
      <Drawer.Screen name={DrawerRoutes.STACK}>
        {props => <StackNavigation />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
