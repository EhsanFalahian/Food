import React, {useCallback, useState} from 'react';
import Container from 'core/components/Container';
import {DrawerContentComponentProps} from '@react-navigation/drawer';
import Text from 'core/components/Text';
import UnStyledButton from 'core/components/UnStyledButton';
import {FlatList} from 'react-native';
import {drawerMenu} from 'features/drawer/fixture/data';
import {useTheme} from 'styled-components';
import Icon from 'core/components/Icon';
import {DrawerData} from '../../type';

type Props = DrawerContentComponentProps;

const DrawerContent: React.FC<Props> = () => {
  const {palette} = useTheme();

  const [select, setSelect] = useState<number>(1);
  const renderItem = useCallback(
    ({item}: {item: DrawerData}) => {
      return (
        <UnStyledButton
          flexDirection={'row'}
          alignItems={'center'}
          borderLeftWidth={select === item.id ? 6 : 0}
          borderColor={palette.border}
          px={3}
          py={3}
          mt={item.id === 6 ? 7 : 0}
          onPress={() => {
            setSelect(item.id);
          }}>
          <Icon name={item?.icon} size={30} color={palette.textSecondary} />
          <Text
            pl={3}
            fontWeight={700}
            size={'xr'}
            color={select === item.id ? palette.title : palette.textSecondary}
            t>
            {item.title}
          </Text>
        </UnStyledButton>
      );
    },
    [select, setSelect],
  );

  return (
    <Container flex={1} pt={5}>
      <FlatList data={drawerMenu} renderItem={renderItem} />
    </Container>
  );
};

export default DrawerContent;
