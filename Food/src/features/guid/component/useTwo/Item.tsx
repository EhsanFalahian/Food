import React from 'react';
import {UseTwo} from 'features/guid/type';
import Container from 'core/components/Container';
import Text from 'core/components/Text';
import {useTheme} from 'styled-components';
import Icon from 'core/components/Icon';

type Props = UseTwo;
const Item: React.FC<Props> = ({id, name, amount}) => {
  const {palette} = useTheme();
  return (
    <Container
      backgroundColor={palette.white}
      borderRadius={18}
      py={3}
      px={3}
      mx={4}
      my={2}>
      <Container
        flexDirection={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}>
        <Container flexDirection={'row'} alignItems={'center'}>
          <Container
            width={50}
            height={50}
            borderRadius={40}
            backgroundColor={palette.background}
          />
          <Container px={2}>
            <Text fontWeight={'bold'} t>
              {name}
            </Text>
            <Text size={'s'}>${amount}</Text>
          </Container>
        </Container>
        <Container
          borderWidth={2}
          flexDirection={'row'}
          alignItems={'center'}
          borderColor={palette.border}
          borderRadius={18}
          py={2}
          px={3}>
          <Text pr={2} fontWeight={'bold'} t>
            {id === 1 ? 'guid:nextPerson' : 'guid:checkOut'}
          </Text>
          <Icon name={'arrow-right'} size={20} color={palette.title} />
        </Container>
      </Container>
      <Container
        mt={3}
        width={'40%'}
        height={4}
        backgroundColor={palette.background}
        alignSelf={'center'}
      />
    </Container>
  );
};

export default Item;
