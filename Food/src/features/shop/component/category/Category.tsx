import React, {useCallback} from 'react';
import Container from 'core/components/Container';
import {FlatList} from 'react-native';
import {categories} from 'features/shop/fixture/data';
import Text from 'core/components/Text';
import {useTheme} from 'styled-components';
import UnStyledButton from 'core/components/UnStyledButton';
import {FoodCategories} from 'features/shop/type';

type Props = {
  selectItem?: number;
  onSelectItem: (id: number) => void;
};

const Category: React.FC<Props> = ({selectItem, onSelectItem}) => {
  const {palette} = useTheme();
  const renderItem = useCallback(
    ({item}: {item: FoodCategories}) => {
      return (
        <Container overflow={'hidden'} mx={1} borderRadius={100}>
          <UnStyledButton
            onPress={() => onSelectItem(item.id)}
            py={2}
            px={3}
            width={'100%'}
            backgroundColor={
              selectItem === item.id ? palette.select : palette.white
            }>
            <Text fontWeight={'bold'}>{item.title}</Text>
          </UnStyledButton>
        </Container>
      );
    },
    [selectItem, onSelectItem],
  );
  return (
    <Container py={3}>
      <FlatList
        data={categories}
        horizontal={true}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        keyExtractor={data => data.id.toString()}
      />
    </Container>
  );
};

export default Category;
