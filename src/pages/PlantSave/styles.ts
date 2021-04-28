import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  margin-top: ${getStatusBarHeight()}px;
  background-color: ${({ theme }) => theme.colors.shape};
`;

export const Content = styled.View`
  flex: 1;
  padding: 50px 30px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.shape};
`;

export const PlantName = styled.Text`
  font-size: 24px;
  margin-top: 15px;
  color: ${({ theme }) => theme.colors.heading};
  font-family: ${({ theme }) => theme.fonts.heading};
`;

export const PlantAbout = styled.Text`
  text-align: center;
  font-size: 17px;
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.heading};
  font-family: ${({ theme }) => theme.fonts.text};
`;

export const Controller = styled.View`
  padding: 20px;
  padding-bottom: ${getBottomSpace() || 20}px;
  background-color: ${({ theme }) => theme.colors.background_controller};
`;

export const Hint = styled.View`
  padding: 20px;
  border-radius: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
  bottom: 60px;
  background-color: ${({ theme }) => theme.colors.blue_light};
`;

export const HintImage = styled.Image`
  width: 56px;
  height: 56px;
`;

export const HintText = styled.Text`
  flex: 1;
  margin-left: 10px;
  font-size: 17px;
  text-align: justify;
  color: ${({ theme }) => theme.colors.blue};
  font-family: ${({ theme }) => theme.fonts.text};
`;

export const ControllerLabel = styled.Text`
  text-align: center;
  font-size: 14px;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.colors.heading};
  font-family: ${({ theme }) => theme.fonts.complement};
`;

export const DateTimePickerButton = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  padding: 40px 0;
`;

export const DateTimePickerButtonText = styled.Text`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.heading};
  font-family: ${({ theme }) => theme.fonts.text};
`;
