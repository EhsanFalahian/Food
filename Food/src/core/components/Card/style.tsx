import styled from 'styled-components';
import Container from '../Container';

export const Card = styled(Container)`
  border-radius: 5px;
  background-color: ${({theme}) => theme.palette.background};
`;
