import styled, { useTheme } from 'styled-components/native';
// import { FlatList } from 'react-native'
// import { DepoimentsProps } from '.'


export const Container = styled.ScrollView`
  flex: 1;
  padding: 10px 20px;
`;

export const Content = styled.ScrollView`
  margin-bottom: 70px;
`;

export const Loading =  styled.ActivityIndicator.attrs({
    size: "large",
    color: "#929FB3",
})`
  margin-top: 20px;
`;

// export const DepoimentsList = styled(FlatList as new () => FlatList<DepoimentsProps>).attrs({
//   horizontal: false,
//   showsVerticalScrollIndicator: false,
//   contentContainerStyle: {
//     marginBottom: 70,
//   }
// })`
// `;