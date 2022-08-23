import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StackRoutes} from './routes';
import Shop from 'features/shop/screen/Shop';
import {screenOption} from 'core/config/Navigator';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import {useDrawerProgress} from '@react-navigation/drawer';
import palette from 'core/styles/palette';
import Profile from 'features/profile/Profile';

export type StackNavigatorParams = {
  [StackRoutes.SHOP]: undefined;
  [StackRoutes.PROFILE]: undefined;
};

const Stack = createStackNavigator<StackNavigatorParams>();

const StackNavigation: React.FC = () => {
  const progress = useDrawerProgress();

  const animatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(progress.value, [0, 1], [1, 0.8], {
      extrapolateRight: Extrapolation.CLAMP,
    });
    const borderRadius = interpolate(progress.value, [0, 1], [0, 50], {
      extrapolateRight: Extrapolation.CLAMP,
    });

    const borderWidth = interpolate(progress.value, [0, 1], [0, 10], {
      extrapolateRight: Extrapolation.CLAMP,
    });
    const borderColor = withTiming(palette.white);
    return {
      transform: [{scale}],
      borderRadius,
      borderWidth,
      borderColor,
    };
  });

  return (
    <Animated.View style={[{flex: 1, overflow: 'hidden'}, animatedStyle]}>
      <Stack.Navigator screenOptions={screenOption}>
        <Stack.Screen name={StackRoutes.SHOP} component={Shop} />
        <Stack.Screen name={StackRoutes.PROFILE} component={Profile} />
      </Stack.Navigator>
    </Animated.View>
  );
};

export default StackNavigation;
