import { useEffect, useState } from 'react';
import { Container, Title, Description, FormView } from './styles';

import { Button } from '../../components/Button';

import { SignIn } from 'phosphor-react-native';

import { Alert } from 'react-native';
import React from 'react';
import { Input } from '../../components/Input';
import { useNavigation } from '@react-navigation/native';

export function SignInCP() {
  const { navigate } = useNavigation();

  const [isAutenticating, setIsAuthenticanting] = useState(false)
  async function handleSignIn() {
    navigate('home')
  }
  
  return (
    <Container>
      <Title>TO-DO LIST</Title>
      <Description>
        A notação da sua tarefas
      </Description>
      <FormView>
        <Input label='Seu nome' />
      </FormView>
      <Button 
        title='Acessar' 
        onPress={handleSignIn} 
        isLoading={isAutenticating}
        Icon={SignIn}
      />
    </Container>
  );
}
