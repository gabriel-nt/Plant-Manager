import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 12px 0;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 32px;
  margin-top: 38px;
  line-height: 38px;
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.colors.heading};
`;

export const Image = styled.Image``;

export const SubTitle = styled.Text`
  padding: 0 20px;
  font-size: 17px;
  line-height: 25px;
  text-align: center;
  color: ${({ theme }) => theme.colors.body_dark};
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
