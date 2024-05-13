import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, Loading, Title } from './styles';
import theme from '../../theme';

type Props = TouchableOpacityProps & {
  title: string;
  isLoading?: boolean;
  Icon?: any;
}

export function Button({ title, isLoading = false, Icon, ...rest }: Props) {
  return (
    <Container activeOpacity={0.7} disabled={isLoading} {...rest}>
      {Icon && <Icon size={32} color={theme.COLORS.WHITE} />}
      {
        isLoading
          ? <Loading />
          : <Title>{title}</Title>
      }
    </Container>
  );
}