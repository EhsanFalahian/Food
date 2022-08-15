import styled from 'styled-components';
import {View} from 'react-native';
import {border, color, flexbox, layout, position, space} from 'styled-system';

export const Container = styled(View)`
  ${color}
  ${flexbox}
  ${layout}
  ${space}
  ${border}
  ${position}
`;
