import styled from 'styled-components/native';

interface Props {
  focused: boolean;
}

export const Container = styled.View<Props>`
  width: 60px;
  height: 60px;
  background-color: ${({ theme, focused }) => focused ? theme.colors.secondary : theme.colors.gray};
  border-radius: 26px;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;
