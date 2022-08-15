import styled from 'styled-components';
import UnStyledButton from '../UnStyledButton';

import {convertHexToRGBA} from '../../styles/color';

export const StyeldButton = styled(UnStyledButton)<{
  borderRadius?: number | string;
  opacityBackground?: number;
  type?: 'background' | 'border' | 'title' | 'textSecondary';
  transparent?: boolean;
}>`
  padding: 15px;
  margin: 20px;
  border-radius: ${({borderRadius}) => (borderRadius ? borderRadius : '8px')};
  background-color: ${({theme, transparent, type}) =>
    transparent
      ? 'transparent'
      : convertHexToRGBA(theme.palette[type ?? 'title'], 100)};
`;
