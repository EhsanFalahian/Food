import React, {useMemo} from 'react';
import {CartItems} from '../type';
import Card from 'core/components/Card';
import Container from 'core/components/Container';
import Text from 'core/components/Text';
import UnStyledButton from 'core/components/UnStyledButton';
import {useTheme} from 'styled-components';
import OrderItem from 'features/cart/component/OrderItem';
import DashedLine from 'react-native-dashed-line';

type Props = CartItems;

const CartItem: React.FC<Props> = ({name, order, id}) => {
  const {palette} = useTheme();
  const sum = useMemo(() => {
    let sum = 0;
    order?.forEach(item => (sum = sum + item.amount));
    return sum;
  }, []);
  return (
    <Card my={3} px={3} py={3} mx={3}>
      <Container
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
            <Text fontWeight={'bold'} t>
              {name}
            </Text>
            <Text color={palette.textSecondary} fontWeight={'bold'}>
              ${sum}
            </Text>
          </Container>
        </Container>
        <UnStyledButton>
          <Text color={palette.select} fontWeight={'bold'} size={'xr'} t>
            cart:addMore
          </Text>
        </UnStyledButton>
      </Container>
      {order.map((item, index) => (
        <OrderItem {...item} key={index} />
      ))}
      <DashedLine
        dashGap={15}
        dashLength={15}
        dashColor={palette.textSecondary}
      />
      <Container alignItems={'center'}>
        <Text py={2} fontWeight={'bold'}>
          ${sum}
        </Text>
        <UnStyledButton>
          <Text
            fontWeight={'bold'}
            borderBottomColor={palette.select}
            borderBottomWidth={2}
            color={palette.select}
            t>
            cart:atMyExpense
          </Text>
        </UnStyledButton>
      </Container>
    </Card>
  );
};

export default CartItem;
