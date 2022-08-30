import React from 'react';
import {MyOrder} from '../type';
import Container from '../../../core/components/Container';
import Text from '../../../core/components/Text';
import {useTheme} from 'styled-components';

type Props = MyOrder;

const OrderItem: React.FC<Props> = ({item, amount}) => {
  const {palette} = useTheme();
  return (
    <Container
      pl={6}
      py={2}
      width={'95%'}
      flexDirection={'row'}
      alignItems={'center'}
      justifyContent={'space-between'}>
      <Container flexDirection={'row'} alignItems={'center'} width={'80%'}>
        <Container
          width={50}
          height={50}
          borderRadius={15}
          backgroundColor={palette.background}
        />
        <Container width={'80%'}>
          <Text px={2} color={palette.textSecondary} fontWeight={'bold'}>
            {item}
          </Text>
        </Container>
      </Container>
      <Text pl={3} fontWeight={'bold'}>
        ${amount}
      </Text>
    </Container>
  );
};

export default OrderItem;
