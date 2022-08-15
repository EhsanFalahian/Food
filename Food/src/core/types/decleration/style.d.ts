import 'styled-components';
import {Palette} from 'core/styles/palette';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: Palette;
  }
}
