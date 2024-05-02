import FontAwesome from '@expo/vector-icons/FontAwesome5';
import { Tabs } from 'expo-router';
import React from 'react';

const LayoutForTabs = () => {
    console.log(Date.now(), 'LayoutForTabs');
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
            <Tabs.Screen
                name='index'
                options={{
                    title: 'Tab1',
                    headerShown: false,
                    tabBarIcon: ({ color }) =>
                        <FontAwesome size={28} name='home' color={color} />,
                }}
            />
            <Tabs.Screen
                name='tab2/index'
                options={{
                    title: 'Tab2',
                    headerShown: false,
                    tabBarIcon: ({ color }) =>
                        <FontAwesome size={28} name='user-cog' color={color} />,
                }}
            />
        </Tabs>
    );
};
export default LayoutForTabs;
