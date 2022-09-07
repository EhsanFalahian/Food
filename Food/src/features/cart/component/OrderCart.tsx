import React from 'react';
import Container from '../../../core/components/Container';
import Text from '../../../core/components/Text';
import {OrderType} from '../type';
import {useTranslation} from 'react-i18next';
import {useTheme} from 'styled-components';
import UnStyledButton from '../../../core/components/UnStyledButton';
import Icon from '../../../core/components/Icon';

type Props = OrderType;

const OrderCart: React.FC<Props> = ({code, id, total, status}) => {
  const {t} = useTranslation('cart');
  const {palette} = useTheme();
  return (
    <Container
      backgroundColor={palette.white}
      px={3}
      py={3}
      my={3}
      borderRadius={24}>
      <Container
        flexDirection={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}>
        <Container>
          <Text py={2} fontWeight={'bold'}>
            {t('order')}
            {code}
          </Text>
          <Text fontWeight={'bold'} color={palette.textSecondary} t>
            {status === 'onWay' ? 'cart:courierOnTheWay' : 'cart:creating'}
          </Text>
        </Container>
        <Text fontWeight={'bold'} color={palette.textSecondary}>
          ${total}
        </Text>
      </Container>
      <Container
        pt={3}
        alignSelf={'center'}
        flexDirection={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}>
        <UnStyledButton
          flexDirection={'row'}
          borderWidth={2}
          borderColor={palette.textSecondary}
          borderRadius={18}
          py={2}
          mx={2}
          px={4}
          alignItems={'center'}>
          <Text fontWeight={'bold'} px={2} t>
            cart:details
          </Text>
          <Icon name={'magnify'} size={25} color={palette.select} />
        </UnStyledButton>
        <UnStyledButton
          disabled={status === 'onWay' ? false : true}
          backgroundColor={
            status === 'onWay' ? 'transparent' : palette.background
          }
          flexDirection={'row'}
          borderWidth={status === 'onWay' ? 2 : 0}
          borderColor={palette.textSecondary}
          borderRadius={18}
          py={2}
          px={4}
          alignItems={'center'}>
          <Text fontWeight={'bold'} px={2} t>
            cart:map
          </Text>
          <Icon
            name={'map-marker-multiple-outline'}
            size={25}
            color={status === 'onWay' ? palette.select : palette.text}
          />
        </UnStyledButton>
      </Container>
    </Container>
  );
};

export default OrderCart;
