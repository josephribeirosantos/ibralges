import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './pages/HomeScreen';
import ListScreen from './pages/ListScreen';
import NotificationsScreen from './pages/NotificationsScreen';
import PostScreen from './pages/PostScreen';
import SettingsScreen from './pages/SettingsScreen';

import ButtonNew from './components/ButtonNew';

import { Icon, Entypo, Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function Routes() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#020E26',
                inactiveTintColor: '#403D39',
                showLabel: false,
            }}
        >

            <Tab.Screen name="Home" component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="home" size={size} color={color} />
                    )
                }}
            />
            < Tab.Screen name="Categories" component={ListScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="list" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen name="Post" component={PostScreen}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size }) => (
                        < ButtonNew size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen name="Notifications" component={NotificationsScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="bell" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen name="Settings" component={SettingsScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="settings" size={size} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}