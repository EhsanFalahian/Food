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
  translateX: Animated.SharedValue<number>;
  activeIndex: Animated.SharedValue<number>;
  next: () => void;
};
const {width} = Dimensions.get('screen');

const NextButton: React.FC<Props> = ({translateX, activeIndex, next}) => {
  const nStyle = useAnimatedStyle(() => {
    const isActive = activeIndex?.value === 2;
    const opacity = withTiming(isActive ? 1 : 0);
    const rTranslateX = isActive
      ? interpolate(
          translateX.value,
          [3 * width, 2 * width, width],
          [100, -80, 200],
          Extrapolation.CLAMP,
        )
      : 100;

    const rWidth = isActive
      ? interpolate(
          translateX.value,
          [3 * width, 2 * width, width],
          [0, 80, 0],
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
    <Animated.View style={nStyle}>
      <Button
        type={'title'}
        width={150}
        title={'guid:letMeTry'}
        onPress={next}
        iconRight={'arrow-right'}
      />
    </Animated.View>
  );
};

export default NextButton;
