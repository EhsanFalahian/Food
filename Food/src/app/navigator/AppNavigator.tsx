import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AppRoutes} from './routes';
import AuthNavigator from '@auth/navigator';
import HowUseApp from '../../features/guid/screen/HowUseApp';
import AddFriend from '../../features/addFriend/screen/AddFriend';
import {screenOption} from '../../core/config/Navigator';
import DrawerNavigation from '../../features/drawer/navigation/DrawerNavigation';
import Cart from '../../features/cart/screens/Cart';
import CartNavigator from '../../features/cart/navigator';

export type AppNavigatorParams = {
  [AppRoutes.AUTH]: undefined;
  [AppRoutes.HOWUSE]: undefined;
  [AppRoutes.ADDFRIEND]: undefined;
  [AppRoutes.DRAWER]: undefined;
  [AppRoutes.CART]: undefined;
};

const Stack = createStackNavigator<AppNavigatorParams>();

const AppNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator
      screenOptions={screenOption}
      initialRouteName={AppRoutes.AUTH}>
      <Stack.Screen name={AppRoutes.AUTH} component={AuthNavigator} />
      <Stack.Screen name={AppRoutes.HOWUSE} component={HowUseApp} />
      <Stack.Screen name={AppRoutes.ADDFRIEND} component={AddFriend} />
      <Stack.Screen name={AppRoutes.DRAWER} component={DrawerNavigation} />
      <Stack.Screen name={AppRoutes.CART} component={CartNavigator} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
