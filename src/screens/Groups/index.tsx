import { GroupCard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { useState } from 'react';
import { FlatList } from 'react-native';
import Styles from './styles';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';

export function Groups() {
    const [groups, setGroups] = useState<string[]>([]);
    
    function handleNewGroup() {
        // navigation.navigate('new');
    }

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

