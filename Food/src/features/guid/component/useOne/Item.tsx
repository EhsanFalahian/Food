import React from 'react';
import {UseOne} from 'features/guid/type';
import Container from 'core/components/Container';
import Text from 'core/components/Text';
import {useTheme} from 'styled-components';

type Props = UseOne;
const Item: React.FC<Props> = ({id, name, active}) => {
  const {palette} = useTheme();
  return (
    <Container
      backgroundColor={active ? palette.border : palette.white}
      width={'30%'}
      borderRadius={18}
      py={2}
      my={2}
      mx={1}>
      <Container
        alignSelf={'center'}
        width={50}
        height={50}
        // borderWidth={1}
        borderRadius={40}
        backgroundColor={palette.background}
      />
      <Text textAlign={'center'} pt={4} t>
        {name}
      </Text>
    </Container>
  );
};

export default Item;
