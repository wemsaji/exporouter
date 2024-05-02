import { LogBox } from 'react-native';
// https://github.com/expo/router/discussions/632
LogBox.ignoreLogs(['Warning: Function components cannot be given refs.']);

import { Stack } from 'expo-router/stack';

const LayoutForAppRoot = () => {
    console.log(Date.now(), 'LayoutForAppRoot');
    return (
        <Stack>
            <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
        </Stack>
    );
};
export default LayoutForAppRoot;
