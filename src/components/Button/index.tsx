import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, Loading, Title } from './styles';
import theme from '../../theme';

type Props = TouchableOpacityProps & {
  title: string;
  isLoading?: boolean;
  Icon?: any;
  bgColor?: string;
  color?: string;
}

export function Button({ 
  title, 
  isLoading = false, 
  Icon, 
  bgColor = theme.COLORS.BRAND_MID, 
  color = theme.COLORS.WHITE, 
  ...rest 
}: Props) {
  return (
    <Container 
      activeOpacity={0.7}
      disabled={isLoading}
      {...rest}
      style={{backgroundColor: bgColor}}
    >
      {Icon && <Icon size={32} color={color} />}
      {
        isLoading
          ? <Loading />
          : <Title style={{color: color}}>{title}</Title>
      }
    </Container>
  );
}