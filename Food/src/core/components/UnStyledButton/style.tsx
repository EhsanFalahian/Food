import styled from 'styled-components';
import {Pressable, TouchableOpacity} from 'react-native';
import {border, color, flexbox, layout, space} from 'styled-system';

export const AndroidButton = styled(Pressable)`
  ${color}
  ${layout}
    ${border}
    ${space}
    ${flexbox}
`;

export const IosButton = styled(TouchableOpacity)`
  ${color}
  ${layout}
    ${border}
    ${space}
    ${flexbox}
`;
