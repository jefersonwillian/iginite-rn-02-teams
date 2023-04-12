import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { FlatList } from 'react-native';

import { ButtonIcon } from "@components/ButtonIcon";
import { Filter } from "@components/Filter";
import { Input } from "@components/Input";
import { useState } from "react";
import Styles from "./styles";

export function Players() {
    const [team, setTeam] = useState('Time A')
    const [players, setPlayers] = useState([])
    
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

            <Styles.HeaderList>
                <FlatList
                    data={['Time A', 'Time B']}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <Filter
                            title={item}
                            isActive={item === team}
                            onPress={() => setTeam(item)}
                        />
                    )}
                    horizontal
                    
                />

                <Styles.NumberOfPlayers>
                    {players.length}
                </Styles.NumberOfPlayers>
            </Styles.HeaderList>
        </Styles.Container>
    )
}