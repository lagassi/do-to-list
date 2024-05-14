import { TouchableOpacity } from 'react-native'
import { SignOut, ArrowSquareLeft } from 'phosphor-react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Container, Greeting, Message, Name, Button, TextButton } from './styles';

import theme from '../../theme';
import { useNavigation } from '@react-navigation/native';

type Props = {
  isBtnGoBack?: boolean;
}

export function Header({ isBtnGoBack = false }: Props) {
  const insets = useSafeAreaInsets();
  const { goBack, navigate } = useNavigation();

  const paddingTop = insets.top + 32;

  function handleLogOut() {
    navigate('signIn')
  }

  return (
    <Container style={{ paddingTop }}>
      {isBtnGoBack && (
        <Button activeOpacity={0.7} onPress={() => goBack()}>
          <ArrowSquareLeft size={40} color={theme.COLORS.BRAND_LIGHT} />
        </Button>
      )}
      <Greeting>
        <Message>
          Olá
        </Message>

        <Name>
          Lagassi
        </Name>
      </Greeting>

      <Button activeOpacity={0.7} onPress={handleLogOut}>
        <TextButton>
          Sair
        </TextButton>
        <SignOut size={25} color={theme.COLORS.BRAND_LIGHT} />
      </Button>
    </Container>
  );
}