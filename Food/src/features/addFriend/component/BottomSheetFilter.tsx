import React, {FunctionComponent, useCallback, useMemo, useState} from 'react';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import {BottomSheetMethods} from '@gorhom/bottom-sheet/lib/typescript/types';
import Container from 'core/components/Container';
import Text from 'core/components/Text';
import UnStyledButton from 'core/components/UnStyledButton';
import {useTheme} from 'styled-components';
import Icon from 'core/components/Icon';
import Input from 'core/components/Input/Input';
import {contactData} from 'features/addFriend/fixture/data';
import ContactItem from 'features/addFriend/component/ContactItem';
import Button from 'core/components/Button';
import {useTranslation} from 'react-i18next';

type Props = {
  bottomSheetRef: React.RefObject<BottomSheetMethods>;
};
const BottomSheetFilter: FunctionComponent<Props> = props => {
  const [isChecked, setIsChecked] = useState<number[]>([]);
  const handleCheck = useCallback(
    (id: number) => {
      setIsChecked(items =>
        items.includes(id)
          ? items?.filter(item => item !== id)
          : [...items, id],
      );
    },
    [isChecked, setIsChecked],
  );
  const {palette} = useTheme();
  const {t} = useTranslation('friend');
  const {bottomSheetRef} = props;
  const snapPoint = useMemo(() => ['25%', '80%'], []);

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={2}
      />
    ),
    [],
  );

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={-1}
      snapPoints={snapPoint}
      backdropComponent={renderBackdrop}>
      <Container flex={1} px={4} py={3}>
        <Container
          px={3}
          flexDirection={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}>
          <UnStyledButton
            flexDirection={'row'}
            alignItems={'center'}
            borderWidth={2}
            borderColor={palette.textSecondary}
            borderRadius={18}
            py={1}
            px={3}>
            <Text pr={2} fontWeight={'bold'} t>
              friend:sendLink
            </Text>
            <Icon
              name={'share-variant-outline'}
              size={20}
              color={palette.border}
            />
          </UnStyledButton>
          <UnStyledButton
            flexDirection={'row'}
            alignItems={'center'}
            borderWidth={2}
            borderColor={palette.textSecondary}
            borderRadius={18}
            py={1}
            px={3}>
            <Text pr={2} fontWeight={'bold'} t>
              friend:copyLink
            </Text>
            <Icon name={'content-copy'} size={20} color={palette.border} />
          </UnStyledButton>
        </Container>
        <Container
          backgroundColor={palette.background}
          py={3}
          my={4}
          borderRadius={15}>
          <Text textAlign={'center'} fontWeight={'bold'} size={'xr'} pb={3} t>
            friend:byPhoneNumber
          </Text>
          <Container
            px={3}
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}>
            <Input
              flex={1}
              value={'+7 (987) 654-32-10'}
              editable={false}
              backgroundColor={palette.white}
            />
            <Container
              backgroundColor={palette.white}
              alignItems={'center'}
              justifyContent={'center'}
              width={60}
              height={60}
              ml={2}
              borderRadius={15}>
              <Icon name={'send-outline'} size={35} color={palette.title} />
            </Container>
          </Container>
        </Container>
      </Container>
      <Text textAlign={'center'} fontWeight={'bold'} size={'xr'} t>
        friend:yourContacts
      </Text>
      <BottomSheetScrollView showsVerticalScrollIndicator={false}>
        {contactData.map(item => {
          return (
            <ContactItem {...item} key={item.id} onIsChecked={handleCheck} />
          );
        })}
      </BottomSheetScrollView>

      <Button
        title={
          isChecked.length === 0
            ? 'friend:sendInvite'
            : `${t('sendInvites')}(${isChecked.length})`
        }
        onPress={() => {
          console.log(isChecked.length);
        }}
      />
    </BottomSheet>
  );
};

export default BottomSheetFilter;
