import { Container, Label, Title, Input, FormView } from './styles';
import { ClockCounterClockwise, Plus } from 'phosphor-react-native';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import theme from '../../theme';

export function NewTaks() {
  const insets = useSafeAreaInsets();

  const paddingBottom = insets.bottom;
  return (
    <Container style={{paddingBottom}}>
      <Header isBtnGoBack/>
      <Title>Nova tarefa</Title>
      <FormView>
        <Label>Titulo</Label>
        <Input />
        <Label>Descrição</Label>
        <Input 
          style={{height: 100}} 
          multiline = {true}
          numberOfLines = {3} />
      </FormView>
      <Button
        title='Criar nova tarefa'
        Icon={Plus}
        onPress={() => console.log('newTask')}
      />

    </Container>
  );
}
