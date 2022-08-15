import React from 'react';
import {ContainerProps} from '../Container/Container';
import * as Styled from './style';
export type CardProps = ContainerProps;
const Card = (prop: CardProps): JSX.Element => {
  return <Styled.Card {...prop} />;
};

export default Card;
