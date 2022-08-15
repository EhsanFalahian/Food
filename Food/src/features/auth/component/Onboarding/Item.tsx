import React from 'react';
import Container from 'core/components/Container';
import {OnboardinData} from '@auth/type';
import Text from 'core/components/Text';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {Dimensions} from 'react-native';
import Svg1 from 'app/assets/svg/svg1.svg';
import Svg2 from 'app/assets/svg/svg2.svg';
import Svg3 from 'app/assets/svg/svg3.svg';
import {styles} from '@auth/component/Onboarding/style';

import {useTheme} from 'styled-components';

const {width} = Dimensions.get('screen');

type Props = OnboardinData & {
  index: number;
  translateX: Animated.SharedValue<number>;
};

const Item: React.FC<Props> = ({id, title, description, translateX, index}) => {
  const {palette} = useTheme();

  const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
  const rCircle = useAnimatedStyle(() => {
    const scale = interpolate(
      translateX.value,
      inputRange,
      [0, 1, 0],
      Extrapolation.CLAMP,
    );

    return {
      transform: [{scale}],
    };
  });
  return (
    <Container width={width} flex={1} alignItems={'center'}>
      <Container
        alignItems={'center'}
        justifyContent={'center'}
        mt={40}
        width={'100%'}
        height={'50%'}>
        <Animated.View style={[styles.circle, rCircle]}>
          {index === 0 ? (
            <Svg1 width={'150%'} height={'100%'} />
          ) : index === 1 ? (
            <Svg2 width={'150%'} height={'100%'} />
          ) : (
            <Svg3 width={'150%'} height={'100%'} />
          )}
        </Animated.View>
      </Container>
      <Container mx={4} mt={3}>
        <Text size={'xl'} fontWeight={'bold'} t>
          {title}
        </Text>
        <Text color={palette.text} lineHeight={25} pt={3} t>
          {description}
        </Text>
      </Container>
    </Container>
  );
};

export default Item;
