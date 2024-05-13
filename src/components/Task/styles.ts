import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  margin: 5px 10px;
  padding: 5px 10px;
  min-height: 76px;
  max-height: 76px;
  border-radius: 6px;
  flex-direction: row;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const Content = styled.View`
  width: 80%;

  justify-content: center;
`;

export const ContentAction = styled.View`
  width: 20%;

  flex-direction: row;
  align-items: center;
  justify-content: center;

`;

export const Title = styled.Text`
  margin-bottom: 5px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const Description = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-size: ${({ theme }) => theme.FONT_SIZE.XS}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;

export const ButtonAction = styled.TouchableOpacity`
  width: auto;
  margin: 0px 5px;
`;