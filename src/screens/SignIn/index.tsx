import { useEffect, useState } from 'react';
import { Container, Title, Slogan } from './styles';

import { Button } from '../../components/Button';

import { Alert } from 'react-native';
import React from 'react';

export function SignIn() {
  const [isAutenticating, setIsAuthenticanting] = useState(false)
  async function handleSignIn() {

  }
  
  return (
    <Container>
      <Title>Ignite Fleet</Title>

      <Slogan>
        Gestão de uso de veículos
      </Slogan>

      <Button 
        title='Entrar com Google' 
        onPress={handleSignIn} 
        isLoading={isAutenticating} 
      />
    </Container>
  );
}
