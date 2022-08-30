import React, {FunctionComponent, useCallback, useMemo, useState} from 'react';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import {BottomSheetMethods} from '@gorhom/bottom-sheet/lib/typescript/types';
import {Recommended} from '../../type';
import Container from '../../../../core/components/Container';
import Text from '../../../../core/components/Text';
import {Image} from 'react-native';
import UnStyledButton from '../../../../core/components/UnStyledButton';
import Icon from '../../../../core/components/Icon';
import Input from '../../../../core/components/Input/Input';
import {useTheme} from 'styled-components';
import {recommendData} from '../../fixture/data';
import Button from '../../../../core/components/Button';

type Props = {
  bottomSheetRef: React.RefObject<BottomSheetMethods>;
  item: Recommended;
};

const BottomSheetFilter: FunctionComponent<Props> = ({
  bottomSheetRef,
  item,
}) => {
  const {palette} = useTheme();
  const [value, setValue] = useState<Recommended[]>(recommendData);
  const snapPoint = useMemo(() => ['25%', '85%'], []);
  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={2}
        disappearsOnIndex={-1}
      />
    ),
    [],
  );

  const handleMinus = useCallback(
    (id: number, newQty: number) => {
      const newData = value.map(cl =>
        cl.id === id ? {...cl, qty: newQty} : cl,
      );
      setValue(newData);
    },
    [value, setValue],
  );
  const handlePlus = useCallback(
    (id: number, newQty: number) => {
      const newData = value.map(cl =>
        cl.id === id ? {...cl, qty: newQty} : cl,
      );
      setValue(newData);
    },
    [value],
  );

  return (
    <BottomSheet
      snapPoints={snapPoint}
      index={-1}
      ref={bottomSheetRef}
      backdropComponent={renderBackdrop}>
      <Container alignItems={'center'} py={2} px={5}>
        <Container width={'100%'} alignItems={'center'}>
          <Image source={require('app/assets/pic/1.jpeg')} />
        </Container>
        <Container
          flexDirection={'row'}
          justifyContent={'space-between'}
          width={'100%'}
          py={3}>
          <Text fontWeight={'bold'} size={'l'} t>
            {item?.name}
          </Text>
          <Text fontWeight={'bold'} size={'l'}>
            ${item?.amount}
          </Text>
        </Container>
        <Container
          width={'70%'}
          flexDirection={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}>
          <UnStyledButton
            onPress={() => item.qty > 0 && handleMinus(item?.id, item.qty--)}
            backgroundColor={palette.background}
            py={2}
            px={2}
            borderRadius={10}>
            <Icon name={'minus'} size={25} color={palette.title} />
          </UnStyledButton>
          <Input
            textAlign={'center'}
            backgroundColor={palette.background}
            py={2}
            px={4}
            alignItems={'center'}
            value={item?.qty.toString()}
          />
          <UnStyledButton
            onPress={() => handlePlus(item?.id, item.qty++)}
            backgroundColor={palette.border}
            py={2}
            px={2}
            borderRadius={10}>
            <Icon name={'plus'} size={25} color={palette.title} />
          </UnStyledButton>
        </Container>
      </Container>
      <Text pt={2} px={5} fontWeight={'bold'} size={'l'} t>
        shop:description
      </Text>
      <BottomSheetScrollView>
        <Container px={5} py={2}>
          <Text lineHeight={26} t>
            {item?.description}
          </Text>
        </Container>
      </BottomSheetScrollView>
      <Button title={'shop:addToCart'} />
    </BottomSheet>
  );
};

export default BottomSheetFilter;
