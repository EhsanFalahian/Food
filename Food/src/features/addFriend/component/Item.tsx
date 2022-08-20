import React from 'react';
import {FriendInformation} from 'features/addFriend/type';
import Container from 'core/components/Container';
import Text from 'core/components/Text';
import UnStyledButton from 'core/components/UnStyledButton';
import {useTheme} from 'styled-components';

type Props = FriendInformation & {
  selectedItem: number[];
  onSelectedItem: (id: number) => void;
};

const Item: React.FC<Props> = ({name, id, selectedItem, onSelectedItem}) => {
  const {palette} = useTheme();
  return (
    <UnStyledButton
      onPress={() => onSelectedItem?.(id)}
      width={'30%'}
      height={140}
      backgroundColor={
        selectedItem?.includes(id) ? palette.select : palette.white
      }
      my={2}
      mx={1}
      py={2}
      borderRadius={10}
      alignItems={'center'}>
      <Container
        width={50}
        height={50}
        borderRadius={50}
        backgroundColor={palette.background}
      />
      <Text pt={3} fontWeight={'bold'} textAlign={'center'} t>
        {name}
      </Text>
    </UnStyledButton>
  );
};

export default Item;
