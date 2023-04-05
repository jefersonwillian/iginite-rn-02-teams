import { Header } from '@components/Header';
import Styles from './styles';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';

export function Groups() {
    return (
        <Styles.Container>
            <Header />
            <Highlight
                title='Turmas'
                subtitle="jogue com a sua turma"
            />

            <GroupCard title='Turma do Curso' />
            <GroupCard title='Turma da escola' />
        </Styles.Container>
    );
}

