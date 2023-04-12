import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";

import Styles from "./styles";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";

export function Players() {
    return (
        <Styles.Container>
            <Header showBackButton />

            <Highlight
                title="Nome da turma"
                subtitle="adicione a galera e separe os times"
            />

            <Styles.Form>
                <Input
                   
                    placeholder="Nome da pessoa"
                    autoCorrect={false}
                   
                />

                <ButtonIcon
                    icon="add"
                />
            </Styles.Form>
            
        </Styles.Container>
    )
}