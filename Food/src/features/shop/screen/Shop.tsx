import React, {useCallback, useEffect, useRef, useState} from 'react';
import Container from 'core/components/Container';
import Text from 'core/components/Text';
import TopScreen from 'core/components/TopContainer/TopScreen';
import Input from 'core/components/Input/Input';
import Icon from 'core/components/Icon';
import {useTheme} from 'styled-components';
import Category from 'features/shop/component/category';
import RecommendList from 'features/shop/component/recommend';
import {ScrollView} from 'react-native';
import BottomSheetFilter from '../component/bottomSheet/BottomSheetFilter';
import BottomSheet from '@gorhom/bottom-sheet';
import {recommendData} from '../fixture/data';

import UnStyledButton from '../../../core/components/UnStyledButton';

const Shop = (): JSX.Element => {
  const {palette} = useTheme();
  const [selectItem, setSelectItem] = useState<number>();
  const [pressed, setPressed] = useState<number>();
  const selectHandler = useCallback((id: number) => {
    setSelectItem(id);
  }, []);

  const pressedHandler = useCallback((id: number) => {
    setPressed(id);
    bottomSheetRef?.current?.expand();
  }, []);

  const bottomSheetRef = useRef<BottomSheet>(null);

  return (
    <>
      <TopScreen
        title={'shop'}
        iconLeft={'briefcase-outline'}
        isIconLeft={true}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Container
            backgroundColor={palette.white}
            py={3}
            px={3}
            borderRadius={24}>
            <Text fontWeight={'bold'} size={'xr'} pb={1} t>
              shop:helloPeter
            </Text>
            <Text color={palette.textSecondary} pb={3} t>
              shop:whatAreYouLooking
            </Text>
            <Container
              mx={2}
              px={3}
              borderRadius={16}
              backgroundColor={palette.background}
              flexDirection={'row'}
              alignItems={'center'}>
              <Icon
                name={'magnify-expand'}
                size={25}
                color={palette.textSecondary}
              />
              <Input placeholder={'shop:foodName'} />
            </Container>
          </Container>
          <Category selectItem={selectItem} onSelectItem={selectHandler} />
          <Container pt={2}>
            <Text fontWeight={'bold'} size={'l'} t>
              shop:weRecommend
            </Text>
            <RecommendList onPressed={pressedHandler} />
          </Container>
          <Container pt={2}>
            <Text fontWeight={'bold'} size={'l'} t>
              shop:vegetarian
            </Text>
            <RecommendList onPressed={pressedHandler} />
          </Container>
        </ScrollView>
        <Container
          justifyContent={'center'}
          borderRadius={8}
          width={'100%'}
          height={100}
          backgroundColor={palette.white}>
          <Container
            px={2}
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}>
            <Container flexDirection={'row'}>
              <Container
                width={50}
                height={50}
                borderRadius={40}
                backgroundColor={palette.background}
              />
              <Container pl={2}>
                <Text fontWeight={'bold'}>Igor</Text>
                <Text color={palette.text}>$7.82</Text>
              </Container>
            </Container>
            <UnStyledButton
              flexDirection={'row'}
              alignItems={'center'}
              py={1}
              px={3}
              borderWidth={1}
              borderColor={palette.border}
              borderRadius={18}>
              <Text px={2} t>
                shop:checkOut
              </Text>
              <Icon name={'arrow-right'} size={20} color={palette.title} />
            </UnStyledButton>
          </Container>
        </Container>
      </TopScreen>
      <BottomSheetFilter
        bottomSheetRef={bottomSheetRef}
        item={recommendData.filter(item => item.id === pressed)[0]}
      />
    </>
  );
};

export default Shop;
