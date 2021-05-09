import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './pages/Home';
import MoreScreen from './pages/MoreScreen';
import NotificationsScreen from './pages/NotificationsScreen';
import PostScreen from './pages/PostScreen';
import TithesOfferingsScreen from './pages/TithesOfferingsScreen';

import ButtonNew from './components/ButtonNew';

import { Icon, Entypo, Feather } from '@expo/vector-icons';

import { View, Image, StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

export default function Routes() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#0D0D0D',
                inactiveTintColor: '#898C8F',
                borderTopColor: 'transparent',
                showLabel: true,
            }} initialRouteName="Home"
        >
            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="home" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen name="Contribua" component={TithesOfferingsScreen}
                options={{
                    Image: ({ color, size }) => (
                        < DisplayAnImageWithStyle size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen name="Agendamento"
                component={PostScreen}
                options={{
                    tabBarLabel: 'Agendamento',
                    tabBarIcon: ({ tintColor }) => (
                        <ButtonNew />
                    )
                }}

            />
            <Tab.Screen name="Pregações" component={NotificationsScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="youtube" size={size} color={color} />
                    )
                }}
            />
            < Tab.Screen name="Mais" component={MoreScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="list" size={size} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}