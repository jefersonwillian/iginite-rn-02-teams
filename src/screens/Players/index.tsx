import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";

import Styles from "./styles";
import { ButtonIcon } from "@components/ButtonIcon";

export function Players() {
    return (
        <Styles.Container>
            <Header showBackButton />

            <Highlight
                title="Nome da turma"
                subtitle="adicione a galera e separe os times"
            />

            <ButtonIcon icon="add" type="SECONDARY"/>
        </Styles.Container>
    )
}