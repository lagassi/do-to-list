import React from 'react';
import { Container, Title, Content, ContentAction, Description, ButtonAction } from './styles';
import { CheckSquare, Trash, Square } from 'phosphor-react-native';
import theme from '../../theme';

type Props = {
  title: string;
  description: string;
  checked: boolean;
  onPress?: () => void;
}

export function Task({ title, description, checked, onPress }: Props) {
  return (
    <Container>
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Content>
      <ContentAction>
        <ButtonAction onPress={onPress}>
          {checked ? (
            <CheckSquare size={32} color={theme.COLORS.BRAND_LIGHT} />
          ): (
            <Square size={32} color={theme.COLORS.BRAND_LIGHT} />
          )}
        </ButtonAction>
        <ButtonAction onPress={onPress}>
          <Trash size={32} color={theme.COLORS.RED}/>
        </ButtonAction>
      </ContentAction>
    </Container>
  );
}