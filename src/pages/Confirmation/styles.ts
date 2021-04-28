import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.background};
`;

export const Emoji = styled.Text`
  font-size: 78px;
`;

export const Title = styled.Text`
  font-size: 22px;
  margin-top: 20px;
  margin-bottom: 16px;
  line-height: 38px;
  color: ${({ theme }) => theme.colors.heading};
  font-family: ${({ theme }) => theme.fonts.heading};
`;

export const SubTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.text};
  color: ${({ theme }) => theme.colors.heading};
  text-align: center;
  font-size: 17px;
  padding: 0 20px;
`;

export const Footer = styled.View`
  width: 100%;
  padding: 0 75px;
  margin-top: 40px;
`;
