import React from 'react';

import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import Button from 'core/components/Button';
import {Dimensions} from 'react-native';

type Props = {
  activeIndex: Animated.SharedValue<number>;
  translateX: Animated.SharedValue<number>;
  next: () => void;
};

const {width} = Dimensions.get('screen');
const NextButton: React.FC<Props> = ({activeIndex, next, translateX}) => {
  const sStyle = useAnimatedStyle(() => {
    const isActive = activeIndex?.value === 2;
    const opacity = withTiming(isActive ? 1 : 0);
    const rTranslateX = isActive
      ? interpolate(
          translateX.value,
          [3 * width, 2 * width, width],
          [100, 0, 100],
          Extrapolation.CLAMP,
        )
      : 100;

    const rWidth = isActive
      ? interpolate(
          translateX.value,
          [3 * width, 2 * width, width],
          [0, 100, 0],
          Extrapolation.CLAMP,
        )
      : 0;

    return {
      opacity: opacity,
      width: rWidth,
      translateX: rTranslateX,
    };
  });
  return (
    <Animated.View style={sStyle}>
      <Button
        title={'auth:next'}
        width={100}
        onPress={() => next()}
        type={'title'}
        iconRight={'arrow-right'}
      />
    </Animated.View>
  );
};

export default NextButton;
