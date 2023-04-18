import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";

// import { AppError } from "@utils/AppError";
// import { groupCreate } from "@storage/group/groupCreate";

import Styles from "./styles";

import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { groupCreate } from "@storage/group/groupCreate";

export function NewGroup() {
    const [group, setGroup] = useState('');

    const navigation = useNavigation();

    async function handleNew() {
        try {
            await groupCreate(group);
            navigation.navigate('players', { group })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Styles.Container>
            <Header showBackButton />

            <Styles.Content>
                <Styles.Icon />

                <Highlight
                    title="Nova turma"
                    subtitle="crie a turma para adicionar as pessoas"
                />

                <Input
                    placeholder="Nome da turma"
                    onChangeText={setGroup}
                />

                <Button
                    title="Criar"
                    style={{ marginTop: 20 }}
                    onPress={handleNew}
                />
            </Styles.Content>
        </Styles.Container>
    )
}