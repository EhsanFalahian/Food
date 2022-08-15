import React from 'react';
import {UnStyledButtonProps} from 'core/components/UnStyledButton/UnStyledButton';
import {FontSize} from 'core/styles/fontSize';
import {Font} from 'core/styles/fonts';
import palette, {Palette} from 'core/styles/palette';
import * as Styled from './style';
import Icon from 'core/components/Icon/Icon';
import Text from 'core/components/Text/Text';

export type ButtonProps = Omit<UnStyledButtonProps, 'borderRadius'> & {
  title?: string;
  size?: FontSize;
  font?: Font;
  iconRight?: string;
  iconLeft?: string;
  color?: keyof Palette | string;
  type?: 'background' | 'border' | 'title' | 'textSecondary';
  translate?: boolean;
  borderRadius?: number | string;
  opacityBackground?: number;
  transparent?: boolean;
};

const Button = (props: ButtonProps): JSX.Element => {
  const {
    title,
    size,
    font,
    iconRight,
    iconLeft,
    color,
    type,
    translate,
    transparent,
    borderRadius,
    opacityBackground,
    ...rest
  } = props;
  return (
    <Styled.StyeldButton
      type={type}
      transparent={transparent}
      borderRadius={borderRadius}
      {...rest}
      flexDirection={'row'}
      alignItems={'center'}
      justifyContent={'center'}>
      {iconLeft && <Icon name={iconLeft} size={25} color={palette.border} />}
      <Text
        color={color ? color : palette.background}
        fontWeight={'bold'}
        size={'xr'}
        pr={2}
        t>
        {title}
      </Text>
      {iconRight && (
        <Icon
          name={iconRight}
          size={25}
          color={type === 'title' ? palette.border : palette.text}
        />
      )}
    </Styled.StyeldButton>
  );
};

export default Button;
