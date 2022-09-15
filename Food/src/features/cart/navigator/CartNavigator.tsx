import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {cartRoute} from './route';
import Cart from '../screens/Cart';
import CheckOut from '../screens/CheckOut';
import Payment from '../screens/Payment';
import {screenOption} from '../../../core/config/Navigator';
import Orders from '../screens/Orders';

export type CartNavigatorParam = {
  [cartRoute.CART]: undefined;
  [cartRoute.CHECKOUT]: undefined;
  [cartRoute.PAYMENT]: undefined;
  [cartRoute.ORDER]: undefined;
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
      <Stack.Screen name={cartRoute.ORDER} component={Orders} />
    </Stack.Navigator>
  );
};

export default CartNavigator;
