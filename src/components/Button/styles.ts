import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const ButtonContainer = styled(RectButton)`
  background-color: ${({ theme }) => theme.colors.green};
  height: 56px;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.heading};
`;
