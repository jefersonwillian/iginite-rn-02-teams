import Styles from "./styles";

type Props = {
    title: string;
    subtitle: string;
}

export function Highlight({ title, subtitle }: Props) {
    return (
        <Styles.Container>
            <Styles.Title>
                {title}
            </Styles.Title>

            <Styles.Subtitle>
                {subtitle}
            </Styles.Subtitle>
        </Styles.Container>
    )
}