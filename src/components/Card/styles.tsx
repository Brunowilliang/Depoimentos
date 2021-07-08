import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity`
  flex: 1;
  padding: 10px 16px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.white};
  margin-bottom: 15px;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;


export const Profile = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;


export const Avatar = styled.View`
  margin-right: 10px;
`;


export const Image = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;


export const Info = styled.View`
`;


export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.black};
`;

export const Views = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.black};
`;


export const Actions = styled.View`
  align-items: flex-end;
  justify-content: space-between;
`;


export const ButtonAction = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Days = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.black};
`;


export const Description = styled.Text`
  margin: 10px 0;
  width: 100%;
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.black};
`;


export const Footer = styled.View`
  flex-direction: row;
`;

export const Button = styled.TouchableOpacity`
  margin-right: 25px;
  flex-direction: row;
  align-items: center;

`;

export const Likes = styled.Text`
  margin-left: 8px;
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.gray};
`;




