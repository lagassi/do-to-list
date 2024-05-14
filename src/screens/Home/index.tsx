import { Container, ScrollViewTaks, Title } from './styles';
import { ClockCounterClockwise, Plus } from 'phosphor-react-native';
import { useNavigation } from '@react-navigation/native'

import { Header } from '../../components/Header';
import { Task } from '../../components/Task';
import { Button } from '../../components/Button';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import theme from '../../theme';

export function Home() {
  const insets = useSafeAreaInsets();
  const { navigate } = useNavigation();

  const paddingBottom = insets.bottom;
  return (
    <Container style={{paddingBottom}}>
      <Header />
      <Title>Tarefas</Title>
      <ScrollViewTaks>
        <Task 
          title='Tarefa 01' 
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente expedita, laborum culpa at'
          checked={false}
        />
        <Task 
          title='Tarefa 02' 
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente expedita, laborum culpa at'
          checked={true}
        />
        <Task 
          title='Tarefa 03' 
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente expedita, laborum culpa at'
          checked={true}
        />
        <Task 
          title='Tarefa 04' 
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente expedita, laborum culpa at'
          checked={false}
        />
      </ScrollViewTaks>
      <Button
        title='Nova tarefa'
        Icon={Plus}
        onPress={() => navigate('newTask')}
      />
      <Button 
        title='Historico'
        Icon={ClockCounterClockwise}
        bgColor='transparent'
        color={theme.COLORS.BLUE}
        onPress={() => navigate('history')}
      />
    </Container>
  );
}
