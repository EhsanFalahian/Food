import {TextInputProps} from 'react-native';
import * as Styled from './style';
import {
  BorderProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  SpaceProps,
} from 'styled-system';
import {useTranslation} from 'react-i18next';

export type InputProps = TextInputProps &
  LayoutProps &
  FlexboxProps &
  BorderProps &
  SpaceProps &
  ColorProps;

const Input = (props: InputProps): JSX.Element => {
  const {placeholder, ...rest} = props;
  const {t} = useTranslation();
  return (
    <Styled.Input
      {...rest}
      textAlign={'left'}
      placeholder={placeholder ? t(placeholder) : undefined}
    />
  );
};

export default Input;
