import styled from 'styled-components';
import Container from '../Container';

export const Card = styled(Container)`
  border-radius: 24px;
  background-color: ${({theme}) => theme.palette.white};
`;
export const shadow = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 2.5,

  elevation: 4,
};
