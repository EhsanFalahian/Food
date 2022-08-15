import React from 'react';
import Container from 'core/components/Container';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
  useDerivedValue,
} from 'react-native-reanimated';
import {OnboardingItem} from '@auth/fixture/data';
import Item from '@auth/component/Onboarding/Item';
import Dot from '@auth/component/Onboarding/Dot';
import {Dimensions} from 'react-native';
import SkipButton from '@auth/component/Onboarding/SkipButton';
import NextButton from '@auth/component/Onboarding/NextButton';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from 'react-native-screens/native-stack';
import {AuthNavigatorParams} from '@auth/navigator/AuthNavigator';
import {AuthRoutes} from '@auth/navigator/routes';

const {width} = Dimensions.get('screen');
const Onboarding = (): JSX.Element => {
  const translateX = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      translateX.value = event.contentOffset.x;
    },
  });

  const activeIndex = useDerivedValue(() => {
    return Math.round(translateX.value / width);
  });

  const {navigate} =
    useNavigation<NativeStackNavigationProp<AuthNavigatorParams>>();
  return (
    <Container flex={1}>
      <Animated.ScrollView
        onScroll={scrollHandler}
        pagingEnabled={true}
        horizontal={true}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}>
        {OnboardingItem.map((item, index) => {
          return (
            <Item {...item} index={index} translateX={translateX} key={index} />
          );
        })}
      </Animated.ScrollView>
      <Container
        my={3}
        mx={4}
        flexDirection={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}>
        <Container flexDirection={'row'} alignItems={'center'} flex={1}>
          {OnboardingItem.map((_, index) => {
            return (
              <Dot
                index={index}
                translateX={translateX}
                activeIndex={activeIndex}
                key={index}
              />
            );
          })}
        </Container>
        <SkipButton
          activeIndex={activeIndex}
          translateX={translateX}
          skip={() => {
            navigate(AuthRoutes.LOGIN);
          }}
        />
        <NextButton
          activeIndex={activeIndex}
          translateX={translateX}
          next={() => {
            navigate(AuthRoutes.LOGIN);
          }}
        />
      </Container>
    </Container>
  );
};

export default Onboarding;
