import React from 'react';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import {styles} from '@auth/component/Onboarding/style';
import palette from '../../../../core/styles/palette';
import {Dimensions} from 'react-native';

type Props = {
  index: number;
  translateX: Animated.SharedValue<number>;
  activeIndex: Animated.SharedValue<number>;
};

const {width} = Dimensions.get('screen');
const Dot: React.FC<Props> = ({index, translateX, activeIndex}) => {
  const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
  const dStyle = useAnimatedStyle(() => {
    const isActive = activeIndex.value === index;
    return {
      backgroundColor: withTiming(
        isActive ? palette.title : palette.textSecondary,
      ),
      width: interpolate(
        translateX.value,
        inputRange,
        [15, 25, 15],
        Extrapolation.CLAMP,
      ),
    };
  });
  return <Animated.View style={[styles.dot, dStyle]} />;
};

export default Dot;
