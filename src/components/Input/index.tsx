import { Container, Label, InputText } from './styles';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import theme from '../../theme';

type Props = {
  multiline?: boolean,
  numberOfLines?: number,
  height?: number,
  label: string;
}

export function Input({ label, multiline, numberOfLines, height = 56}: Props) {
  const insets = useSafeAreaInsets();

  const paddingBottom = insets.bottom;
  return (
    <Container style={{paddingBottom}}>
        <Label>{label}</Label>
        <InputText 
          style={{height: height}} 
          multiline = {multiline}
          numberOfLines = {numberOfLines} />
    </Container>
  );
}
