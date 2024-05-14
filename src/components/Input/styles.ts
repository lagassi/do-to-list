import styled from 'styled-components/native';

export const Container = styled.View`
`;

export const Label = styled.Text`
  margin: 10px 10px 0px 10px;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;

export const InputText = styled.TextInput`
  color: ${({ theme }) => theme.COLORS.GRAY_800};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  border-radius: 6px;
  height: 56px;
  margin: 5px 10px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`;
