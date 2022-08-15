import {DefaultTheme} from 'styled-components';
import {Palette} from './palette';

export const getTextColor = (theme: DefaultTheme, color?: string) => {
  return !color
    ? theme.palette.title
    : color in theme.palette
    ? theme.palette[color as keyof Palette]
    : color;
};

export const convertHexToRGBA = (hex: string, opacity: number): string => {
  const tempHex = hex.replace('#', '');
  const r = parseInt(tempHex.substring(0, 2), 16);
  const g = parseInt(tempHex.substring(2, 4), 16);
  const b = parseInt(tempHex.substring(4, 6), 16);

  return `rgba(${r},${g},${b},${opacity / 100})`;
};
