import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 10px 30px 0 30px;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.background};
`;

export const Hint = styled.View`
  padding: 20px;
  border-radius: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.blue_light};
`;

export const HintImage = styled.Image`
  width: 56px;
  height: 56px;
`;

export const HintText = styled.Text`
  flex: 1;
  font-size: 17px;
  margin-left: 10px;
  text-align: justify;
  color: ${({ theme }) => theme.colors.blue};
  font-family: ${({ theme }) => theme.fonts.text};
`;

export const Plants = styled.View`
  flex: 1;
  width: 100%;
`;

export const PlantsTitle = styled.Text`
  font-size: 24px;
  margin: 20px 0;
  color: ${({ theme }) => theme.colors.heading};
  font-family: ${({ theme }) => theme.fonts.heading};
`;
