import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './pages/HomeScreen';
import ListScreen from './pages/ListScreen';
import NotificationsScreen from './pages/NotificationsScreen';
import PostScreen from './pages/PostScreen';
import SettingsScreen from './pages/SettingsScreen';

import ButtonNew from './components/ButtonNew';

import { Icon, Entypo, Feather } from '@expo/vector-icons';

import { View, Image, StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

export default function Routes() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#020E26',
                inactiveTintColor: '#403D39',
                showLabel: false,
            }} initialRouteName="Home"
        >
            <Tab.Screen name="Home" component={HomeScreen}
                options={{
                    tabBarLabel: 'Inicio',
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="home" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen name="Settings" component={SettingsScreen}
                options={{
                    Image: ({ color, size }) => (
                        < DisplayAnImageWithStyle size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen name="Post" component={PostScreen}
                options={{
                    tabBarLabel: 'Agendamento',
                    tabBarIcon: ({ color, size }) => (
                        < ButtonNew size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen name="Notifications" component={NotificationsScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="youtube" size={size} color={color} />
                    )
                }}
            />
            < Tab.Screen name="Categories" component={ListScreen}
                options={{
                    tabBarLabel: 'Devocionais',
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="list" size={size} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}