import { TouchableOpacityProps } from "react-native";
import Styles from "./styles";

type Props = TouchableOpacityProps & {
    title: string;
}

export function GroupCard({ title, ...rest }: Props) {
    return (
        <Styles.Container {...rest}>
            <Styles.Icon />
            <Styles.Title>
                {title}
            </Styles.Title>
        </Styles.Container>
    )
}