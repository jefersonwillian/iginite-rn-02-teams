import Styles from "./styles";

type Props = {
    message: string;
}

export function ListEmpty({ message }: Props) {
    return (
        <Styles.Container>
            <Styles.Message>{message}</Styles.Message>
        </Styles.Container>
    )
}