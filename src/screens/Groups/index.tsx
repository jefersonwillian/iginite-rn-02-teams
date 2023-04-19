import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { Alert, FlatList } from 'react-native';

import Styles from './styles';

import { Button } from '@components/Button';
import { GroupCard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { ListEmpty } from '@components/ListEmpty';

import { groupsGetAll } from '@storage/group/groupsGetAll';
import { Loading } from '@components/Loading';

export function Groups() {
    const [isLoading, setIsLoading] = useState(true);
    const [groups, setGroups] = useState<string[]>([]);
    const navigation = useNavigation();

    function handleNewGroup() {
        navigation.navigate('new');
    }

    async function fetchGroups() {
        try {
            setIsLoading(true);
            const data = await groupsGetAll();
            setGroups(data);
        } catch (error) {
            Alert.alert('Turmas', 'Não foi possível carregar as turmas');
            console.log(error);
        } finally {
            setIsLoading(false);
        } 
    }

    function handleOpenGroup(group: string) {
        navigation.navigate('players', { group })
    }
    
    useFocusEffect(useCallback(() => {
        fetchGroups()
    }, []))
    
    return (
        <Styles.Container>
            <Header />
            <Highlight
                title='Turmas'
                subtitle="jogue com a sua turma"
            />
            {
                isLoading ? <Loading /> : <FlatList
                    data={groups}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <GroupCard title={item} onPress={() => handleOpenGroup(item)} />
                    )}
                    contentContainerStyle={!groups.length && { flex: 1 }}
                    ListEmptyComponent={() => (
                        <ListEmpty message="Que tal cadastrar a primeira turma?" />
                    )}
                    showsVerticalScrollIndicator={false}
                />
            }
            

            <Button
                title='Criar nova turma'
                onPress={handleNewGroup}
            />
        </Styles.Container>
    );
}

