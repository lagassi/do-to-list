import { TouchableOpacity } from 'react-native'
import { Power } from 'phosphor-react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Container, Greeting, Message, Name, ButtonLogout, TextButton } from './styles';

import theme from '../../theme';

export function Header() {
  const insets = useSafeAreaInsets();

  const paddingTop = insets.top + 32;

  function handleLogOut() {
   
  }

  return (
    <Container style={{ paddingTop }}>
      <Greeting>
        <Message>
          Olá
        </Message>

        <Name>
          Lagassi
        </Name>
      </Greeting>

      <ButtonLogout activeOpacity={0.7} onPress={handleLogOut}>
        <TextButton>
          Sair
        </TextButton>
        <Power size={25} color={theme.COLORS.BRAND_LIGHT} />
      </ButtonLogout>
    </Container>
  );
}