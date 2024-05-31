import { useEffect, useState } from 'react';
import { Container, Title, Description, FormView } from './styles';

import { Button } from '../../components/Button';

import { SignIn } from 'phosphor-react-native';

import { Alert } from 'react-native';
import React from 'react';
import { Input } from '../../components/Input';
import { useNavigation } from '@react-navigation/native';
import { saveData } from '../../storage';

export function SignInCP() {
  const { navigate } = useNavigation();

  const [isAutenticating, setIsAuthenticanting] = useState(false);
  const [userName, setUserName] = useState('');

  async function handleSignIn() {
    setIsAuthenticanting(true);

    try {
      if (!userName) {
        Alert.alert('Informe o nome de usuário');
        return;
      }

      const result = await saveData('user', JSON.stringify({name: userName}));

      if (!result) {
        Alert.alert('Não foi possível salvar o nome de usuário');
      }

      navigate('home')
    } catch (error) {

      Alert.alert('Ocorreu ao acessar seu usuário.');

    } finally {
      setIsAuthenticanting(false);
    }
  }
  
  return (
    <Container>
      <Title>TO-DO LIST</Title>
      <Description>
        A notação da sua tarefas
      </Description>
      <FormView>
        <Input
          label='Seu nome'
          onChangeText={setUserName}
          value={userName} 
        />
      </FormView>
      <Button 
        title='Acessar' 
        onPress={handleSignIn} 
        isLoading={isAutenticating}
        Icon={SignIn}
        disabled={isAutenticating}
      />
    </Container>
  );
}
