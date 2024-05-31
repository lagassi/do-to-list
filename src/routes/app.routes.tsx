import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { History } from '../screens/History';
import { NewTaks } from '../screens/NewTask';
import { Alert } from 'react-native';
import { useEffect, useState } from 'react';
import { getData } from '../storage';
import { SignInCP } from '../screens/SignIn';
import { Loading } from '../components/Loading';
import { UserDTO } from '../dtos/UserDTO';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  const [user, setUser] = useState<UserDTO>({} as UserDTO);
  const [loading, setLoading] = useState<boolean>(true);

  async function getUser(): Promise<void> {
    try {
      const result = await getData('user');

      if (!result) {
        return;
      }

      setUser(JSON.parse(String(result)));
    } catch (error) {
      Alert.alert('Ocorreu um erro ao buscar seu usuário');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getUser();
  }, [])

  if (loading) {
    return (
      <Loading />
    );
  }
  return(
    <Navigator screenOptions={{ headerShown: false }}>
      {!user?.name && (
        <Screen 
          name="signIn"
          component={SignInCP}
        />
      )}
      <Screen 
        name="home"
        component={Home}
      />
      <Screen 
        name="history"
        component={History}
      />
      <Screen 
        name="newTask"
        component={NewTaks}
      />
    </Navigator>
  )
}