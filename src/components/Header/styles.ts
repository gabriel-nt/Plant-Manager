import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: 20px 0;
  margin-top: ${getStatusBarHeight()}px;
  justify-content: space-between;
`;

export const Greeting = styled.Text`
  font-size: 32px;
  color: ${({ theme }) => theme.colors.heading};
  font-family: ${({ theme }) => theme.fonts.text};
`;

export const UserName = styled.Text`
  font-size: 32px;
  line-height: 40px;
  color: ${({ theme }) => theme.colors.heading};
  font-family: ${({ theme }) => theme.fonts.heading};
`;

export const Content = styled.View``;

export const UserImage = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 40px;
`;
