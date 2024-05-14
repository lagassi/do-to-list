import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { History } from '../screens/History';
import { NewTaks } from '../screens/NewTask';
import { SignInCP } from '../screens/SignIn';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return(
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen 
        name="signIn"
        component={SignInCP}
      />
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