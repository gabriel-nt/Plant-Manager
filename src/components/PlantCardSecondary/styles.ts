import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

interface ButtonModalProps {
  type: 'cancel' | 'delete';
}

export const ButtonContainer = styled(RectButton)`
  width: 100%;
  margin-bottom: 12px;
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
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.heading};
`;

export const Details = styled.View`
  align-items: flex-end;
`;

export const TimeLabel = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.text};
  color: ${({ theme }) => theme.colors.text_light};
`;

export const Time = styled.Text`
  margin-top: 5px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.heading};
`;

export const ButtonRemove = styled(RectButton)`
  width: 100px;
  height: 85px;
  margin-top: 10px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  position: relative;
  right: 20px;
  padding-left: 15px;
  background-color: ${({ theme }) => theme.colors.red};
`;

export const ButtonIcon = styled(Feather)`
  font-size: 28px;
  color: ${({ theme }) => theme.colors.white};
`;

export const CenteredView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.overlay};
`;

export const Content = styled.View`
  width: 75%;
  margin: 20px;
  padding: 32px;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Box = styled.View`
  padding: 25px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.shape};
`;

export const Description = styled.Text`
  font-size: 17px;
  line-height: 25px;
  text-align: center;
  margin-top: 16px;

  font-family: ${({ theme }) => theme.fonts.text};
  color: ${({ theme }) => theme.colors.heading};
`;

export const PlantName = styled.Text`
  font-size: 17px;
  font-weight: 600;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.colors.heading};
  font-family: ${({ theme }) => theme.fonts.heading};
`;

export const Buttons = styled.View`
  flex-direction: row;
`;

export const ButtonModal = styled(RectButton)<ButtonModalProps>`
  border-radius: 12px;
  margin: 0 5px;
  background-color: ${({ theme, type }) =>
    type === 'cancel' ? theme.colors.red : theme.colors.green};
`;

export const ButtonTextModal = styled.Text<ButtonModalProps>`
  font-size: 17px;
  padding: 13px 20px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.text};
`;
