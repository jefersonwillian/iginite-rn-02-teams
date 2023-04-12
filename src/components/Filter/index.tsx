import { TouchableOpacityProps } from 'react-native';

import Styles, { FilterStyleProps } from './styles';

type Props = TouchableOpacityProps & FilterStyleProps & {
    title: string;
}

export function Filter({ title, isActive = false, ...rest }: Props) {
    return (
        <Styles.Container isActive={isActive} {...rest}>
            <Styles.Title>
                {title}
            </Styles.Title>
        </Styles.Container>
    );
}