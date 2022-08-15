import React from 'react';
import {
  PressableProps,
  TouchableOpacityProps,
  StyleProp,
  ViewStyle,
  Platform,
} from 'react-native';
import {
  FlexboxProps,
  BorderProps,
  LayoutProps,
  ColorProps,
  SpaceProps,
} from 'styled-system';
import * as Style from './style';
import palette from 'core/styles/palette';

export type UnStyledButtonProps = Omit<PressableProps, 'style'> &
  TouchableOpacityProps &
  FlexboxProps &
  BorderProps &
  LayoutProps &
  ColorProps &
  SpaceProps & {
    style?: StyleProp<ViewStyle>;
  };

const UnStyledButton = (prop: UnStyledButtonProps): JSX.Element => {
  const {style, ...rest} = prop;
  return Platform.OS === 'ios' ? (
    <Style.IosButton style={style} {...rest} />
  ) : (
    <Style.AndroidButton
      style={style}
      android_ripple={{color: palette.text}}
      {...rest}
    />
  );
};

export default UnStyledButton;
