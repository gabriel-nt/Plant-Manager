import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.View`
  padding: 0 30px;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const TitleContent = styled.View`
  flex-direction: column;
`;

export const ThemeContainer = styled.View`
  align-self: flex-end;
`;

export const Title = styled.Text`
  font-size: 17px;
  margin-top: 15px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.heading};
  font-family: ${({ theme }) => theme.fonts.heading};
`;

export const SubTitle = styled.Text`
  font-size: 17px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.heading};
  font-family: ${({ theme }) => theme.fonts.text};
`;

export const Plants = styled.View`
  flex: 1;
  padding: 0 20px;
  justify-content: center;
`;

export const EnvironmentList = {
  height: 40,
  paddingBottom: 5,
  paddingRight: 56,
  marginHorizontal: 32,
  marginVertical: 32,
};
