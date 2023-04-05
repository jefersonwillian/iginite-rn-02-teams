import { Header } from '@components/Header';
import Styles from './styles';
import { Highlight } from '@components/Highlight';

export function Groups() {
    return (
        <Styles.Container>
            <Header />
            <Highlight
                title='Turmas'
                subtitle="jogue com a sua turma"
            />
        </Styles.Container>
    );
}

