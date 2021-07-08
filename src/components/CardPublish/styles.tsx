import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  /* flex: 1; */
  height: 150px;
  flex-direction: row;
  padding: 10px 16px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.white};
`;


export const Avatar = styled.View`
  margin-right: 10px;
`;


export const Image = styled.Image`
  width: 30px;
  height: 30px;
`;


export const Content = styled.View`
  flex: 1;
`;


export const Input = styled.TextInput`
  height: 70px;
  padding: 8px 10px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.input};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;


export const Wrapper = styled.View`
  flex: 1;
  margin-top: 15px;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;


export const ActionButtons = styled.View`
  flex-direction: row;
`;

export const Icon = styled(Feather)`
  margin-right: 12px;
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${RFValue(18)}px;
`;

export const Button = styled.TouchableOpacity``;


export const ButtonPublish = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 4px 40px;
  border-radius: 5px;
`;


export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;


export const Line = styled.View`
  margin: 10px 0;
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.border};
`;
