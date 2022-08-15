import {Dimensions, StyleSheet} from 'react-native';
import palette from 'core/styles/palette';

const {width, height} = Dimensions.get('screen');

export const Style = StyleSheet.create({
  uStyle: {
    width: width * 0.9,
    height: height * 0.45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: palette.background,
    marginLeft: 5,
  },
});
