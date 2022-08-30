import React from 'react';
import {ContainerProps} from '../Container/Container';
import * as Styled from './style';
import {shadow} from './style';
export type CardProps = ContainerProps;
const Card = (prop: CardProps): JSX.Element => {
  const {style, ...rest} = prop;
  return <Styled.Card style={[style, shadow]} {...rest} />;
};

export default Card;
