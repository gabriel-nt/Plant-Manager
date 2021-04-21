import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  padding: 12px 12px;
  align-items: center;
  justify-content: space-around;
`;

export const Title = styled.Text`
  font-size: 32px;
  margin-top: 38px;
  line-height: 38px;
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.colors.heading};
  font-family: ${({ theme }) => theme.fonts.heading};
`;

export const Image = styled.Image``;

export const SubTitle = styled.Text`
  padding: 0 20px;
  font-size: 17px;
  line-height: 25px;
  text-align: center;
  color: ${({ theme }) => theme.colors.body_dark};
  font-family: ${({ theme }) => theme.fonts.text};
`;

export const Button = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.green};
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  margin-bottom: 10px;
  width: 56px;
  height: 56px;
`;

export const ButtonText = styled.Text`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.white};
`;

export const ButtonIcon = styled(Feather)`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.white};
`;
