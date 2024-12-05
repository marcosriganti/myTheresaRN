import {
  View,
  Text,
} from 'react-native';
import styled from 'styled-components';


export const CarouselGrid = styled(View)`
  display: flex;
  gap: 24px;
  margin: 16px 0;
`;

export const ErrorMessage = styled(Text)`
  color: red;
  font-size: 16px;
  text-align: center;
  margin: 16px; 
`;
