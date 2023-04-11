import { GroupCard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { useState } from 'react';
import { FlatList } from 'react-native';
import Styles from './styles';
import { ListEmpty } from '@components/ListEmpty';

export function Groups() {
    const [groups, setGroups] = useState<string[]>([]);
    
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
            />
        </Styles.Container>
    );
}

