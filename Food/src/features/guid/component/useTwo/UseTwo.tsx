import React from 'react';
import Container from 'core/components/Container';
import {useTwoData} from 'features/guid/fixture/data';
import Item from './Item';

const UseTwo = (): JSX.Element => {
  return (
    <Container>
      {useTwoData.map((item, index) => {
        return <Item {...item} key={index} />;
      })}
    </Container>
  );
};

export default UseTwo;
