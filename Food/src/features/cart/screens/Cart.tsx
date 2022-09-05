import React from 'react';
import TopContainer from 'core/components/TopContainer';
import Container from 'core/components/Container';
import Text from 'core/components/Text';
import {useTheme} from 'styled-components';
import UnStyledButton from 'core/components/UnStyledButton';
import {cartData, myOrder} from '../fixture/data';
import OrderItem from 'features/cart/component/OrderItem';
import Card from 'core/components/Card';
import CartItem from 'features/cart/component/CartItem';
import {ScrollView} from 'react-native';
import Icon from 'core/components/Icon';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from 'react-native-screens/native-stack';
import {CartNavigatorParam} from 'features/cart/navigator/CartNavigator';
import {cartRoute} from 'features/cart/navigator/route';

const Cart = (): JSX.Element => {
  const {palette} = useTheme();
  const {navigate} =
    useNavigation<NativeStackNavigationProp<CartNavigatorParam>>();
  return (
    <TopContainer
      isGoBack={true}
      title={'cart:cart'}
      background={palette.background}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Card px={3} py={3} mx={3} my={2}>
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
                  cart:myOrder
                </Text>
                <Text color={palette.textSecondary} fontWeight={'bold'}>
                  $
                  {(() => {
                    let sum = 0;
                    myOrder?.forEach(item => (sum = sum + item.amount));
                    return sum;
                  })()}
                </Text>
              </Container>
            </Container>
            <UnStyledButton>
              <Text color={palette.select} fontWeight={'bold'} size={'xr'} t>
                cart:addMore
              </Text>
            </UnStyledButton>
          </Container>
          {myOrder.map((item, index) => (
            <OrderItem {...item} key={index} />
          ))}
        </Card>

        {cartData.map((item, index) => (
          <CartItem {...item} key={index} />
        ))}
      </ScrollView>
      <Container
        borderRadius={18}
        px={3}
        flexDirection={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
        width={'100%'}
        height={100}
        backgroundColor={palette.white}>
        <Container alignItems={'center'}>
          <Text color={palette.text} t>
            cart:ready
          </Text>

          <Text fontWeight={'bold'} t>
            2 / 3
          </Text>
        </Container>
        <UnStyledButton
          onPress={() => navigate(cartRoute.CHECKOUT)}
          backgroundColor={palette.title}
          flexDirection={'row'}
          alignItems={'center'}
          py={2}
          px={4}
          borderRadius={8}>
          <Text px={2} color={palette.white} t>
            cart:next
          </Text>
          <Icon name={'arrow-right'} size={20} color={palette.white} />
        </UnStyledButton>
      </Container>
    </TopContainer>
  );
};

export default Cart;
