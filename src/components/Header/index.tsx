import { useNavigation } from "@react-navigation/native"; import logoImg from '@assets/logo.png';
import Styles from "./styles";

type Props = {
    showBackButton?: boolean;
}

export function Header({ showBackButton = false }: Props) {

    const navigation = useNavigation()

    function handleGoBack() {
        navigation.navigate('groups')
    }

    return (
        <Styles.Container>
            {
                showBackButton &&
                <Styles.BackButton onPress={handleGoBack}>
                    <Styles.BackIcon />
                </Styles.BackButton>
            }
            <Styles.Logo source={logoImg} />
        </Styles.Container>
    )
}