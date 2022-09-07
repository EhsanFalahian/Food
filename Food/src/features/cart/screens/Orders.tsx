import React from 'react';
import TopContainer from '../../../core/components/TopContainer';
import Container from '../../../core/components/Container';
import Text from '../../../core/components/Text';
import {orderData} from '../fixture/data';
import OrderCart from '../component/OrderCart';
import palette from '../../../core/styles/palette';
import Button from '../../../core/components/Button';

const Orders = (): JSX.Element => {
  return (
    <TopContainer
      title={'cart:cart'}
      isGoBack={true}
      background={palette.background}>
      <Container>
        <Text fontWeight={'bold'} size={'l'} t>
          cart:ordersInProcessing
        </Text>
        {orderData.map(item => (
          <OrderCart {...item} key={item.id} />
        ))}
      </Container>
      <Container
        position={'absolute'}
        bottom={4}
        alignSelf={'center'}
        flexDirection={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}>
        <Text
          textAlign={'center'}
          color={palette.textSecondary}
          size={'xr'}
          fontWeight={'bold'}
          t>
          cart:doYouWantAnything
        </Text>
        <Button
          title={'cart:newOrder'}
          iconRight={'arrow-right'}
          type={'title'}
        />
      </Container>
    </TopContainer>
  );
};

export default Orders;
