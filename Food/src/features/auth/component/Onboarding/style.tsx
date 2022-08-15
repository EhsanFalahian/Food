import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('screen');
export const styles = StyleSheet.create({
  circle: {
    position: 'absolute',
    width: width * 0.8,
    borderRadius: width,
    backgroundColor: '#2C3746',
    aspectRatio: 1,
    marginTop: 60,
    paddingRight: 50,
    marginLeft: 30,
    left: (width * 0.7) / 50,
  },

  dot: {
    height: 15,
    borderRadius: 20,
    width: 15,
    marginHorizontal: 5,
    backgroundColor: '#2C3746',
  },
});
