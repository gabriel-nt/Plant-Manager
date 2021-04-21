import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

interface ButtonContainerProps {
  active: boolean;
}

export const ButtonContainer = styled(RectButton)<ButtonContainerProps>`
  padding: 0 20px;
  margin-right: 5px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: ${({ theme, active }) =>
    active ? theme.colors.green_light : theme.colors.shape};
`;

export const ButtonText = styled.Text<ButtonContainerProps>`
  font-size: 14px;
  line-height: 23px;
  color: ${({ theme, active }) =>
    active ? theme.colors.green_dark : theme.colors.heading};
  font-family: ${({ theme, active }) =>
    active ? theme.fonts.heading : theme.fonts.text};
`;
