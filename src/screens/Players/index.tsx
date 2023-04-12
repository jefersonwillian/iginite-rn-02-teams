import { FlatList } from 'react-native';
import { useState } from "react";

import Styles from "./styles";

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { ButtonIcon } from "@components/ButtonIcon";
import { Filter } from "@components/Filter";
import { Input } from "@components/Input";
import { ListEmpty } from "@components/ListEmpty";
import { PlayerCard } from "@components/PlayerCard";

export function Players() {
    const [team, setTeam] = useState('Time A')
    const [players, setPlayers] = useState(['jeferson', 'sasa', 'kkk', 'oooo', 'oooos', 'ooooe', 'ooooeeeeee', 'oooosssssddd', 'oooo2222'])
    
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

            <FlatList
                data={players}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <PlayerCard
                        name={item}
                        onRemove={() => { }}
                    />
                )}
                ListEmptyComponent={() => (
                    <ListEmpty message="Não há pessoas nesse time" />
                )}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[{ paddingBottom: 100 }, !players.length && { flex: 1 }]}
            />

            <Button
                title="Remover Turma"
                type="SECONDARY"
            />
        </Styles.Container>
    )
}