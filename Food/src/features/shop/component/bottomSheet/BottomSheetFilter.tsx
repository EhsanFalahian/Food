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

type Props = {
  bottomSheetRef: React.RefObject<BottomSheetMethods>;
  item: Recommended;
};

const BottomSheetFilter: FunctionComponent<Props> = ({
  bottomSheetRef,
  item,
}) => {
  const {palette} = useTheme();
  const [value, setValue] = useState<number>(1);
  const snapPoint = useMemo(() => ['25%', '85%'], []);
  const renderBackdrop = useCallback(
    props => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={2}
        disappearsOnIndex={-1}
      />
    ),
    [],
  );

  const handleMinus = useCallback(() => {
    {
      value > 0 && setValue(prev => (prev = prev - 1));
    }
  }, [value, setValue]);
  const handlePluse = useCallback(() => {
    setValue(prev => (prev = prev + 1));
  }, [value, setValue]);

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
            onPress={handleMinus}
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
            value={value.toString()}
          />
          <UnStyledButton
            onPress={handlePluse}
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
    </BottomSheet>
  );
};

export default BottomSheetFilter;
