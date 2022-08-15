import React from 'react';
import Container from 'core/components/Container';
import {GuideData} from 'features/guid/type';
import TopContainer from 'core/components/TopContainer';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import UseOne from 'features/guid/component/useOne';
import UseTwo from 'features/guid/component/useTwo';
import UseThree from 'features/guid/component/useThree';
import Text from 'core/components/Text';
import {Style} from './style';
import {useTheme} from 'styled-components';
import {Dimensions} from 'react-native';

type Props = GuideData & {
  index: number;
  translateX: Animated.SharedValue<number>;
};
const {width} = Dimensions.get('screen');

const Item: React.FC<Props> = ({index, title, id, description, translateX}) => {
  const {palette} = useTheme();
  const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
  const rStyle = useAnimatedStyle(() => {
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
    <TopContainer title={'guid:howToUseTheApp'}>
      <Animated.View style={[Style.uStyle, rStyle]}>
        {index === 0 ? <UseOne /> : index === 1 ? <UseTwo /> : <UseThree />}
      </Animated.View>
      <Container pt={3} px={2}>
        <Text fontWeight={'bold'} size={'xl'} pb={3} t>
          {title}
        </Text>
        <Text lineHeight={28} color={palette.text} t>
          {description}
        </Text>
      </Container>
    </TopContainer>
  );
};

export default Item;
