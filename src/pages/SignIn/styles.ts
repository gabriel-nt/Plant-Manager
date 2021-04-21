import styled from 'styled-components/native';

interface InputProps {
  isFilled: boolean;
  isFocused: boolean;
}

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;

export const Form = styled.View`
  flex: 1;
  width: 100%;
  padding: 0 54px;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.TouchableWithoutFeedback`
  flex: 1;
  width: 100%;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 24px;
  line-height: 32px;
  color: ${({ theme }) => theme.colors.heading};
  font-family: ${({ theme }) => theme.fonts.heading};
`;

export const Emoji = styled.Text`
  font-size: 44px;
  margin-bottom: 24px;
`;

export const Input = styled.TextInput<InputProps>`
  color: ${({ theme }) => theme.colors.heading};
  border-bottom-width: 1px;
  font-size: 18px;
  margin-top: 50px;
  padding: 10px;
  text-align: center;
  width: 100%;
  border-bottom-color: ${({ theme, isFocused, isFilled }) =>
    isFocused || isFilled ? theme.colors.green : theme.colors.gray};
`;

export const Footer = styled.View`
  margin-top: 40px;
  width: 100%;
  padding: 0 20px;
`;
