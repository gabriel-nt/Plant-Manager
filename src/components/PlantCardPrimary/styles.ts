import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const ButtonContainer = styled(RectButton)`
  flex: 1;
  max-width: 50%;
  padding: 10px 0;
  margin: 10px;
  align-items: center;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.shape};
`;

export const ButtonText = styled.Text`
  margin: 16px 0;
  color: ${({ theme }) => theme.colors.green_dark};
  font-family: ${({ theme }) => theme.fonts.heading};
`;
