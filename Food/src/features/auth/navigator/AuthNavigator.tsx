import * as React from 'react';
import {AuthRoutes} from '@auth/navigator/routes';
import {createStackNavigator} from '@react-navigation/stack';
import {screenOption} from 'core/config/Navigator';
import Onboarding from '@auth/screens/onboarding/Onboarding';
import Login from '@auth/screens/Login';
import OtpScreen from '@auth/screens/OtpScreen';

export type AuthNavigatorParams = {
  [AuthRoutes.LOGIN]: undefined;
  [AuthRoutes.ONBOARDING]: undefined;
  [AuthRoutes.OTP_SCREEN]: undefined;
};

const Stack = createStackNavigator<AuthNavigatorParams>();

const AuthNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator
      screenOptions={screenOption}
      initialRouteName={AuthRoutes.ONBOARDING}>
      <Stack.Screen name={AuthRoutes.ONBOARDING} component={Onboarding} />
      <Stack.Screen name={AuthRoutes.LOGIN} component={Login} />
      <Stack.Screen name={AuthRoutes.OTP_SCREEN} component={OtpScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
