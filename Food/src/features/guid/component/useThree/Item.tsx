import React from 'react';
import Container from 'core/components/Container';
import Text from 'core/components/Text';
import {UseThree} from 'features/guid/type';
import {useTheme} from 'styled-components';
import DashedLine from 'react-native-dashed-line';

type Props = UseThree;

const Item: React.FC<Props> = ({order, id, name, amount}) => {
  const {palette} = useTheme();
  return (
    <Container
      px={4}
      py={2}
      mx={2}
      my={2}
      borderRadius={10}
      backgroundColor={palette.white}>
      <Container
        flexDirection={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}>
        <Container flexDirection={'row'} alignItems={'center'}>
          <Container
            width={50}
            height={50}
            borderRadius={50}
            backgroundColor={palette.background}
          />
          <Container>
            <Text fontWeight={'bold'} t>
              {name}
            </Text>
            <Text size={'s'} color={palette.textSecondary} fontWeight={'bold'}>
              ${amount}
            </Text>
          </Container>
        </Container>
        <Container>
          <Text color={palette.select} fontWeight={'bold'} t>
            guid:addMore
          </Text>
        </Container>
      </Container>
      <Container
        py={3}
        flexDirection={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}>
        <Container flexDirection={'row'} alignItems={'center'} width={'40%'}>
          <Container
            width={50}
            height={50}
            ml={3}
            borderRadius={20}
            backgroundColor={palette.background}
          />
          <Text fontWeight={'bold'} color={palette.textSecondary} t>
            {order}
          </Text>
        </Container>
        <Text fontWeight={'bold'}>${amount}</Text>
      </Container>
      {id === 2 && (
        <>
          <DashedLine dashGap={15} dashLength={10} dashColor={palette.text} />
          <Text
            textAlign={'center'}
            pt={3}
            fontWeight={'bold'}
            color={palette.select}
            t>
            guid:atMyExpense
          </Text>
        </>
      )}
    </Container>
  );
};

export default Item;
