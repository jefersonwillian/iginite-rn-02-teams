import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Groups } from '@screens/Groups';
import { Players } from '@screens/Players';
import { NewGroup } from '@screens/NewGroup';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    return (
        // screenOptions={{ headerShown: false }} oculta o header no app
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen
                name="groups"
                component={Groups}
            />

            <Screen
                name="new"
                component={NewGroup}
            />         

            <Screen
                name="players"
                component={Players}
            />
        </Navigator>
    );
}