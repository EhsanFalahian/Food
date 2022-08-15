import React from 'react';
import Container from 'core/components/Container';
import {useThreeData} from 'features/guid/fixture/data';
import Item from './Item';

const UseThree = (): JSX.Element => {
  return (
    <Container>
      {useThreeData.map((item, index) => {
        return <Item key={index} {...item} />;
      })}
    </Container>
  );
};

export default UseThree;
