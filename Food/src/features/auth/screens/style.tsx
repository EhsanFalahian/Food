import {StyleSheet} from 'react-native';
import Fonts from 'core/styles/fonts';
import fontSizes from 'core/styles/fontSize';

export const style = StyleSheet.create({
  TextStyle: {
    fontFamily: Fonts.normal,
    fontSize: fontSizes.l,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputContainerStyles: {
    flex: 1,
    height: 64,
    width: 64,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    margin: 5,
  },
});
