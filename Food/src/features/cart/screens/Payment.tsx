import React, {useState} from 'react';
import TopContainer from 'core/components/TopContainer';
import {useTheme} from 'styled-components';
import Container from 'core/components/Container';
import Text from 'core/components/Text';
import UnStyledButton from 'core/components/UnStyledButton';
import {addressData, payingData} from '../fixture/data';
import AddressItem from 'features/cart/component/AddressItem';
import PaymentItem from 'features/cart/component/PaymentItem';
import Icon from 'core/components/Icon';
import Modal from 'core/components/Modal';
import Button from 'core/components/Button';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from 'react-native-screens/native-stack';
import {CartNavigatorParam} from '../navigator/CartNavigator';
import {cartRoute} from '../navigator/route';

const Payment = (): JSX.Element => {
  const {palette} = useTheme();
  const [addressSelect, setAddressSelect] = useState<number>(1);
  const [paySelect, setPaySelect] = useState<number>(1);
  const [visible, setVisible] = useState<boolean>(false);
  const {navigate} =
    useNavigation<NativeStackNavigationProp<CartNavigatorParam>>();

  return (
    <TopContainer
      title={'card:paymentInfo'}
      isGoBack={true}
      background={palette.background}>
      <Container px={3} mt={3}>
        <Container
          flexDirection={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}>
          <Text fontWeight={'bold'} size={'xr'} t>
            cart:shippingAddress
          </Text>
          <UnStyledButton>
            <Text color={palette.select} fontWeight={'bold'} size={'xr'} t>
              cart:add
            </Text>
          </UnStyledButton>
        </Container>
        <AddressItem
          data={addressData}
          select={addressSelect}
          onSelect={setAddressSelect}
        />
      </Container>
      <Container px={3} mt={4}>
        <Container
          flexDirection={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}>
          <Text fontWeight={'bold'} size={'xr'} t>
            cart:payingMethod
          </Text>
          <UnStyledButton>
            <Text color={palette.select} fontWeight={'bold'} size={'xr'} t>
              cart:add
            </Text>
          </UnStyledButton>
        </Container>

        <PaymentItem
          data={payingData}
          select={paySelect}
          onSelect={setPaySelect}
        />
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
            cart:totalPrice
          </Text>

          <Text fontWeight={'bold'} t>
            $18.24
          </Text>
        </Container>
        <UnStyledButton
          onPress={() => setVisible(true)}
          backgroundColor={palette.title}
          flexDirection={'row'}
          alignItems={'center'}
          py={2}
          px={4}
          borderRadius={8}>
          <Text px={2} color={palette.white} t>
            cart:checkOut
          </Text>
          <Icon name={'arrow-right'} size={20} color={palette.white} />
        </UnStyledButton>
      </Container>
      <Modal
        visible={visible}
        onClose={setVisible}
        title={'cart:orderIsProcessed'}>
        <Text textAlign={'center'} color={palette.text} t>
          cart:yourFriendsWill
        </Text>
        <Button
          title={'cart:wait'}
          width={250}
          onPress={() => {
            setVisible(false);
            navigate(cartRoute.ORDER);
          }}
        />
      </Modal>
    </TopContainer>
  );
};

export default Payment;
