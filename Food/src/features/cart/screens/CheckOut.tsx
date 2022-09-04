import React from 'react';
import TopContainer from 'core/components/TopContainer';
import {useTheme} from 'styled-components';
import Text from 'core/components/Text';
import Container from 'core/components/Container';
import Card from 'core/components/Card';
import {checkOutData} from '../fixture/data';
import CheckOutItem from 'features/cart/component/CheckOutItem';
import UnStyledButton from 'core/components/UnStyledButton';
import Icon from 'core/components/Icon';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from 'react-native-screens/native-stack';
import {CartNavigatorParam} from '../navigator/CartNavigator';
import {cartRoute} from '../navigator/route';

const CheckOut = (): JSX.Element => {
  const {navigate} =
    useNavigation<NativeStackNavigationProp<CartNavigatorParam>>();
  const {palette} = useTheme();
  return (
    <TopContainer
      title={'cart:checkOut'}
      isGoBack={true}
      background={palette.background}>
      <Container px={4}>
        <Text color={palette.text} lineHeight={28} t>
          cart:notAllFriendsAccept
        </Text>
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
              <Text t>cart:myOrder</Text>
              <Text>$5.2</Text>
            </Container>
          </Container>
          <Text color={palette.success} fontWeight={'bold'} t>
            cart:myExpense
          </Text>
        </Card>
        {checkOutData.map(item => (
          <CheckOutItem {...item} key={item.id} />
        ))}
      </Container>
      <Container
        position={'absolute'}
        bottom={0}
        borderRadius={24}
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
          onPress={() => navigate(cartRoute.PAYMENT)}
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

export default CheckOut;
