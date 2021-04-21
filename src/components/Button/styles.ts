import styled from 'styled-components/native';

interface ButtonContainerProps {
  isDisabled: boolean | undefined;
}

export const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
  background-color: ${({ theme, disabled }) =>
    disabled === false ? theme.colors.body_dark : theme.colors.green};
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
