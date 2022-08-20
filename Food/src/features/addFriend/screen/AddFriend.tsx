import React, {useCallback, useRef, useState} from 'react';
import TopContainer from 'core/components/TopContainer';
import Container from 'core/components/Container';
import Text from 'core/components/Text';
import {friendInformation} from 'features/addFriend/fixture/data';
import Item from '../component/Item';
import {useTheme} from 'styled-components';
import UnStyledButton from 'core/components/UnStyledButton';
import Icon from 'core/components/Icon';
import Button from 'core/components/Button';
import {useTranslation} from 'react-i18next';
import BottomSheetFilter from 'features/addFriend/component/BottomSheetFilter';
import BottomSheet from '@gorhom/bottom-sheet';

const AddFriend = (): JSX.Element => {
  const [selected, setSelected] = useState<number[]>([]);
  const {palette} = useTheme();

  const bottomSheetRef = useRef<BottomSheet>(null);
  const {t} = useTranslation('friend');
  const selectHandler = useCallback(
    (id: number) => {
      setSelected(items =>
        items?.includes(id)
          ? items?.filter(item => item !== id)
          : [...items, id],
      );
    },
    [setSelected],
  );
  return (
    <>
      <TopContainer isGoBack={true} background={palette.background}>
        <Container px={2}>
          <Text fontWeight={'bold'} size={'xxl'} t>
            friend:hiPeter
          </Text>
          <Text size={'r'} color={palette.text} lineHeight={28} pt={3} t>
            friend:chooseWhoYou
          </Text>
        </Container>
        <Container pt={4} pb={6}>
          <Container flexDirection={'row'} flexWrap={'wrap'}>
            <Container
              my={2}
              mx={1}
              height={140}
              alignItems={'center'}
              backgroundColor={palette.title}
              width={'30%'}
              py={2}
              borderRadius={10}>
              <UnStyledButton
                onPress={() => bottomSheetRef?.current?.expand()}
                width={50}
                height={50}
                borderRadius={40}
                alignItems={'center'}
                justifyContent={'center'}
                borderWidth={2}
                borderColor={palette.white}>
                <Icon name={'plus'} size={25} color={palette.white} />
              </UnStyledButton>
              <Text
                color={palette.white}
                textAlign={'center'}
                pt={3}
                fontWeight={'bold'}
                t>
                friend:addFriend
              </Text>
            </Container>
            {friendInformation.map((item, index) => {
              return (
                <Item
                  selectedItem={selected}
                  onSelectedItem={selectHandler}
                  {...item}
                  key={index}
                />
              );
            })}
          </Container>
        </Container>
        <Button
          title={
            selected.length === 0
              ? 'friend:imAlone'
              : `${t('chooseFriends')}(${selected.length})`
          }
          type={selected.length === 0 ? 'white' : 'title'}
          color={selected.length === 0 ? palette.title : palette.white}
        />
      </TopContainer>
      <BottomSheetFilter bottomSheetRef={bottomSheetRef} />
    </>
  );
};

export default AddFriend;
