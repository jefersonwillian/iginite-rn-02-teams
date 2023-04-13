import { ButtonIcon } from '@components/ButtonIcon';

import Styles from './styles';

type Props = {
    name: string;
    onRemove: () => void;
}

export function PlayerCard({ name, onRemove }: Props) {
    return (
        <Styles.Container>
            <Styles.Icon
                name="person"
            />

            <Styles.Name>
                {name}
            </Styles.Name>

            <ButtonIcon
                icon="close"
                type="SECONDARY"
                onPress={onRemove}
            />
        </Styles.Container>
    );
}