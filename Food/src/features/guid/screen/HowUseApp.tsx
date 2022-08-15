import React, {useCallback} from 'react';
import Container from 'core/components/Container';
import Animated, {
  useAnimatedRef,
  useAnimatedScrollHandler,
  useDerivedValue,
  useSharedValue,
} from 'react-native-reanimated';
import {GuideItem} from 'features/guid/fixture/data';
import Item from 'features/guid/component/Item';
import Dot from 'features/guid/component/Dot';
import {Dimensions, ScrollView} from 'react-native';
import SkipButton from 'features/guid/component/SkipButton';
import NextButton from 'features/guid/component/NextButton';
import {useTheme} from 'styled-components';

const {width} = Dimensions.get('screen');

const HowUseApp = (): JSX.Element => {
  const {palette} = useTheme();
  const translateX = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      translateX.value = event.contentOffset.x;
    },
  });
  const activeIndex = useDerivedValue(() => {
    return Math.round(translateX.value / width);
  });
  const scrollRef = useAnimatedRef<ScrollView>();

  const onSkipPressed = useCallback(() => {
    scrollRef.current?.scrollTo({x: width * (activeIndex.value + 1)});
  }, []);
  return (
    <Container flex={1} backgroundColor={palette.white}>
      <Animated.ScrollView
        ref={scrollRef as any}
        onScroll={scrollHandler}
        pagingEnabled={true}
        horizontal={true}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}>
        {GuideItem.map((item, index) => {
          return (
            <Item {...item} index={index} translateX={translateX} key={index} />
          );
        })}
      </Animated.ScrollView>
      <Container
        flexDirection={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
        px={4}>
        <Container flexDirection={'row'} alignItems={'center'} flex={1}>
          {GuideItem.map((_, index) => {
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
          translateX={translateX}
          activeIndex={activeIndex}
          skip={onSkipPressed}
        />
        <NextButton
          translateX={translateX}
          activeIndex={activeIndex}
          next={() => {
            console.log('ddfd');
          }}
        />
      </Container>
    </Container>
  );
};

export default HowUseApp;
