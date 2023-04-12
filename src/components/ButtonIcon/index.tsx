import { TouchableOpacityProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'

import Styles, { ButtonIconTypeStyleProps } from './styles';

type Props = TouchableOpacityProps & {
    icon: keyof typeof MaterialIcons.glyphMap; // criar uma tipagem para mostra as opções do icones
    type?: ButtonIconTypeStyleProps
}

export function ButtonIcon({ icon, type = 'PRIMARY', ...rest }: Props) {
    return (
        <Styles.Container {...rest}>
            <Styles.Icon
                name={icon}
                type={type}
            />
        </Styles.Container>
    );
}