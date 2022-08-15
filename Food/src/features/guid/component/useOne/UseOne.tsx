import React from 'react';
import Container from 'core/components/Container';
import {useOneData} from 'features/guid/fixture/data';
import Item from './Item';

const UseOne = (): JSX.Element => {
  return (
    <Container px={4} flexDirection={'row'} flexWrap={'wrap'}>
      {useOneData.map((item, index) => {
        return <Item key={index} {...item} />;
      })}
    </Container>
  );
};

export default UseOne;
