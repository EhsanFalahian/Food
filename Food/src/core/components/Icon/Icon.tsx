import React from 'react';
import VectorIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {IconProps} from 'react-native-vector-icons/Icon';

type Prop = IconProps;
const Icon = (prop: Prop): JSX.Element => {
  return <VectorIcon {...prop} />;
};

export default Icon;
