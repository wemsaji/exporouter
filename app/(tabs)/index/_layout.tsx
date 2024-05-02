import { Stack } from 'expo-router/stack';

const LayoutForTab1 = () => {
    console.log(Date.now(), 'LayoutForTab1');
    return (
        <Stack initialRouteName='index/index'>
            <Stack.Screen
                name='index/index'
                options={{
                    title: 'Tab1Stack1',
                    headerShown: true
                }} />
            <Stack.Screen
                name='stack2/index'
                options={{
                    title: 'Tab1Stack2',
                    headerShown: true
                }} />
        </Stack>
    );
};
export default LayoutForTab1;
