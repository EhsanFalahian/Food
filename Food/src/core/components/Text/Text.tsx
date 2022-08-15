import React from 'react';
import {TextProps as NativeTextProps} from 'react-native';
import {
  BorderProps,
  ColorProps,
  FlexboxProps,
  SpaceProps,
  TypographyProps,
} from 'styled-system';
import {FontSize} from 'core/styles/fontSize';
import {Font} from 'core/styles/fonts';
import {Palette} from 'core/styles/palette';
import {useTranslation} from 'react-i18next';
import * as Styled from './style';

export type TextProps = NativeTextProps &
  ColorProps &
  FlexboxProps &
  SpaceProps &
  BorderProps &
  Omit<TypographyProps, 'fontSize' | 'fontFamily'> & {
    size?: FontSize;
    font?: Font;
    color?: keyof Palette | string;
    t?: boolean;
  };
const Text = (props: TextProps): JSX.Element => {
  const {children, t, ...rest} = props;
  const {t: translate} = useTranslation();
  return (
    <Styled.StyledText {...rest}>
      {typeof children === 'string' && t ? translate(children) : children}
    </Styled.StyledText>
  );
};

export default Text;
