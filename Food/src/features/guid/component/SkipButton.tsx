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
  skip: () => void;
  translateX: Animated.SharedValue<number>;
  activeIndex: Animated.SharedValue<number>;
};

const {width} = Dimensions.get('screen');
const SkipButton: React.FC<Props> = ({activeIndex, translateX, skip}) => {
  const sStyle = useAnimatedStyle(() => {
    const isActive = activeIndex?.value === 0 || activeIndex?.value === 1;
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
        width={100}
        onPress={skip}
        title={'guid:next'}
        type={'title'}
        iconRight={'arrow-right'}
      />
    </Animated.View>
  );
};

export default SkipButton;
