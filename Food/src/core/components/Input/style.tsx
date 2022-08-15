import {TextInput} from 'react-native';
import {InputProps} from './Input';
import styled from 'styled-components';
import {border, color, flexbox, layout, space} from 'styled-system';

export const Input = styled(TextInput).attrs<InputProps>(({theme}) => ({
  placeholderTextColor: theme.palette.textSecondary,
  selectionColor: theme.palette.border,
}))<InputProps>`
  font-size: 18px;
  font-weight: bold;
  border-radius: 16px;
  padding: 18px 15px;
  ${color}
  ${space}
  ${flexbox}
  ${border}
  ${layout}
`;
