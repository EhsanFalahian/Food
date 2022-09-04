import React from 'react';
import {CheckOutType} from '../type';
import Card from 'core/components/Card';
import Container from 'core/components/Container';
import Text from 'core/components/Text';
import {useTheme} from 'styled-components';

type Props = CheckOutType;

const CheckOutItem: React.FC<Props> = ({name, accept, total}) => {
  const {palette} = useTheme();
  return (
    <Card
      my={2}
      px={3}
      py={3}
      flexDirection={'row'}
      alignItems={'center'}
      justifyContent={'space-between'}>
      <Container flexDirection={'row'} alignItems={'center'}>
        <Container
          width={50}
          height={50}
          borderRadius={50}
          backgroundColor={palette.background}
        />
        <Container px={2}>
          <Text t>{name}</Text>
          <Text>${total}</Text>
        </Container>
      </Container>
      <Text
        color={accept ? palette.success : palette.textSecondary}
        fontWeight={'bold'}
        t>
        {accept ? 'cart:accept' : 'cart:waiting'}
      </Text>
    </Card>
  );
};
export default CheckOutItem;
