import React, {useCallback} from 'react';
import {FlatList, FlatListProps} from 'react-native';
import {PayingType} from '../type';
import Card from 'core/components/Card';
import Container from 'core/components/Container';
import Text from 'core/components/Text';
import {useTheme} from 'styled-components';
import RadioButton from 'core/components/RadioButton/RadioButton';

type Props = Omit<FlatListProps<PayingType>, 'renderItem'> & {
  data: PayingType[] | undefined;
  select: number;
  onSelect: (id: number) => void;
};

const AddressItem: React.FC<Props> = props => {
  const {select, onSelect, data, ...rest} = props;
  const {palette} = useTheme();
  const renderItem = useCallback(
    ({item}: {item: PayingType}) => {
      return (
        <Card px={3} mx={1} py={3} my={2}>
          <Container flexDirection={'row'} alignItems={'center'}>
            <RadioButton id={item.id} select={select} onSelect={onSelect} />
            <Container px={2}>
              <Text size={'xr'}>{item.title}</Text>
              <Text size={'s'} color={palette.text}>
                {item.address}
              </Text>
            </Container>
          </Container>
        </Card>
      );
    },
    [select, onSelect],
  );
  return <FlatList data={data} renderItem={renderItem} {...rest} />;
};

export default AddressItem;
