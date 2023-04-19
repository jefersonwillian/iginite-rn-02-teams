import { useRoute } from '@react-navigation/native';
import { useEffect, useRef, useState } from "react";
import { Alert, FlatList, TextInput } from 'react-native';

import Styles from "./styles";

import { Button } from "@components/Button";
import { ButtonIcon } from "@components/ButtonIcon";
import { Filter } from "@components/Filter";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { ListEmpty } from "@components/ListEmpty";
import { PlayerCard } from "@components/PlayerCard";

import { PlayerStorageDTO } from '@storage/player/PlayerStorageDTO';
import { playerAddByGroup } from '@storage/player/playerAddByGroup';
import { playersGetByGroup } from '@storage/player/playersGetByGroup';
import { playersGetByGroupAndTeam } from '@storage/player/playersGetByGroupAndTeam';

import { AppError } from '@utils/AppError';
import { playerRemoveByGroup } from '@storage/player/playerRemoveByGroup';

type RouteParams = {
    group: string;
}

export function Players() {
    const [newPlayerName, setNewPlayerName] = useState('');
    const [team, setTeam] = useState('Time A');
    const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);
    
    const route = useRoute();
    const { group } = route.params as RouteParams

    const newPlayerNameInputRef = useRef<TextInput>(null); // tira o foco do input
    
    async function handleAddPlayer() {
        if (newPlayerName.trim().length === 0) {
            return Alert.alert('Nova pessoa', 'Informe o nome da pessoa para adicionar.');
        }

        const newPlayer = {
            name: newPlayerName,
            team,
        }

        try {
            await playerAddByGroup(newPlayer, group);
                       
            newPlayerNameInputRef.current?.blur();

            setNewPlayerName('');
            await fetchPlayersByTeam();
        } catch (error) {
            if (error instanceof AppError) {
                Alert.alert('Nova pessoa', error.message);
            } else {
                console.log(error);
                Alert.alert('Nova pessoa', 'Não foi possível adicionar.')
            }
        }
    }

    async function fetchPlayersByTeam() {
        try {
            const playersByTeam = await playersGetByGroupAndTeam(group, team);
            setPlayers(playersByTeam)
        } catch (error) {
            console.log(error);
            Alert.alert('Pessoas', 'Não foi possível carregar as pessoas do time selecionado.');
        }
    }

    async function handlePlayerRemove(playerName: string) {
        try {
            await playerRemoveByGroup(playerName, group);

            fetchPlayersByTeam()

        } catch (error) {
            console.log(error);

            Alert.alert('Remover pessoa', 'Não foi possível remover essa pessoa.');
        }
    }
    
    useEffect(() => {
        fetchPlayersByTeam();
    }, [team])
    
    return (
        <Styles.Container>
            <Header showBackButton />

            <Highlight
                title={group}
                subtitle="adicione a galera e separe os times"
            />

            <Styles.Form>
                <Input
                    inputRef={newPlayerNameInputRef}
                    placeholder="Nome da pessoa"
                    autoCorrect={false}
                    onChangeText={setNewPlayerName}
                    value={newPlayerName}
                    onSubmitEditing={handleAddPlayer}
                    returnKeyType="done"
                />

                <ButtonIcon
                    icon="add"
                    onPress={handleAddPlayer} 
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
                keyExtractor={item => item.name}
                renderItem={({ item }) => (
                    <PlayerCard
                        name={item.name}
                        onRemove={() => handlePlayerRemove(item.name)}
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