import { Container, Label, InputText } from './styles';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import theme from '../../theme';
import { TextInputProps } from 'react-native';

type Props = TextInputProps & {
  multiline?: boolean,
  numberOfLines?: number,
  height?: number,
  label: string;
}

export function Input({ label, multiline, numberOfLines, height = 56, ...rest}: Props) {

  return (
    <Container>
        <Label>{label}</Label>
        <InputText 
          style={{height: height}} 
          multiline = {multiline}
          numberOfLines = {numberOfLines}
          {...rest} />
    </Container>
  );
}
