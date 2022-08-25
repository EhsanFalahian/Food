import React, {useCallback} from 'react';
import Container from 'core/components/Container';
import {FlatList, Image} from 'react-native';
import {recommendData} from 'features/shop/fixture/data';
import Text from 'core/components/Text';
import {useTheme} from 'styled-components';
import {Recommended} from '../../type';
import UnStyledButton from '../../../../core/components/UnStyledButton';

const RecommendList: React.FC = () => {
  const {palette} = useTheme();
  const renderItem = useCallback(({item}: {item: Recommended}) => {
    return (
      <Container borderRadius={24} overflow={'hidden'} mx={2}>
        <UnStyledButton
          backgroundColor={palette.white}
          width={164}
          // borderRadius={24}
          height={220}
          alignItems={'center'}>
          <Container alignItems={'center'}>
            <Container my={3} height={80} width={80}>
              <Image
                source={require('app/assets/pic/1.jpeg')}
                style={{width: '100%', height: '100%'}}
              />
            </Container>
            <Text textAlign={'center'} fontWeight={'bold'} t>
              {item.name}
            </Text>
          </Container>
          <Container
            mt={3}
            backgroundColor={palette.title}
            py={1}
            px={4}
            borderRadius={16}>
            <Text color={palette.white}>${item.amount}</Text>
          </Container>
        </UnStyledButton>
      </Container>
    );
  }, []);
  return (
    <Container width={'100%'} py={3}>
      <FlatList
        data={recommendData}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={data => data.id.toString()}
      />
    </Container>
  );
};

export default RecommendList;
