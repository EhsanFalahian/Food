import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {cartRoute} from './route';
import Cart from '../screens/Cart';
import CheckOut from '../screens/CheckOut';
import Payment from '../screens/Payment';
import {screenOption} from '../../../core/config/Navigator';

export type CartNavigatorParam = {
  [cartRoute.CART]: undefined;
  [cartRoute.CHECKOUT]: undefined;
  [cartRoute.PAYMENT]: undefined;
};

const Stack = createStackNavigator<CartNavigatorParam>();
const CartNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator
      screenOptions={screenOption}
      initialRouteName={cartRoute.CART}>
      <Stack.Screen name={cartRoute.CART} component={Cart} />
      <Stack.Screen name={cartRoute.CHECKOUT} component={CheckOut} />
      <Stack.Screen name={cartRoute.PAYMENT} component={Payment} />
    </Stack.Navigator>
  );
};

export default CartNavigator;
