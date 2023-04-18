import { GroupCard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { useCallback, useState } from 'react';
import { FlatList } from 'react-native';
import Styles from './styles';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { groupsGetAll } from '@storage/group/groupsGetAll';

export function Groups() {
    const [groups, setGroups] = useState<string[]>([]);
    const navigation = useNavigation();

    function handleNewGroup() {
        navigation.navigate('new');
    }

    async function fetchGroups() {
        try {
            const data = await groupsGetAll();
            setGroups(data)
        } catch (error) {
            console.log(error);
        }
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

            <FlatList
                data={groups}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <GroupCard title={item} />
                )}
                contentContainerStyle={!groups.length && { flex: 1 }}
                ListEmptyComponent={() => (
                    <ListEmpty message="Que tal cadastrar a primeira turma?" />
                )}
                showsVerticalScrollIndicator={false}
            />

            <Button
                title='Criar nova turma'
                onPress={handleNewGroup}
            />
        </Styles.Container>
    );
}

