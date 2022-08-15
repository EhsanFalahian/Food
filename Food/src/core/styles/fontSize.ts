import {RFValue} from 'react-native-responsive-fontsize';

const standardScreenHeight = 580;

const fontSizes = {
  t: RFValue(6.5, standardScreenHeight),
  xs: RFValue(8.5, standardScreenHeight),
  s: RFValue(10.5, standardScreenHeight),
  r: RFValue(11.5, standardScreenHeight),
  xr: RFValue(14, standardScreenHeight),
  l: RFValue(15.5, standardScreenHeight),
  xl: RFValue(22.5, standardScreenHeight),
  xxl: RFValue(30, standardScreenHeight),
};

export type FontSize = keyof typeof fontSizes;
export default fontSizes;
