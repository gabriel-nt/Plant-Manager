import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const ButtonContainer = styled(RectButton)`
  width: 100%;
  padding: 25px 16px;
  border-radius: 20px;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.shape};
`;

export const ButtonText = styled.Text`
  flex: 1;
  margin-left: 8px;
  font-size: 17px;
  color: ${({ theme }) => theme.colors.body_dark};
  font-family: ${({ theme }) => theme.fonts.heading};
`;

export const Details = styled.View`
  align-items: flex-end;
`;

export const TimeLabel = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.text};
  color: ${({ theme }) => theme.colors.body_light};
`;

export const Time = styled.Text`
  margin-top: 5px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.body_dark};
  font-family: ${({ theme }) => theme.fonts.heading};
`;
