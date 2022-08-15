import React from 'react';
import {ViewProps} from 'react-native';
import {
  BorderProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
} from 'styled-system';
import * as Styled from './style';

export type ContainerProps = ViewProps &
  ColorProps &
  LayoutProps &
  BorderProps &
  PositionProps &
  SpaceProps &
  FlexboxProps;

const Container = (props: ContainerProps): JSX.Element => {
  return <Styled.Container {...props} />;
};

export default Container;
