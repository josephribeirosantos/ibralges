import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
/* import { Icon } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient'; */

import Home from './pages/Home';
import ListScreen from './pages/ListScreen';
import NotificationsScreen from './pages/NotificationsScreen';
import PostScreen from './pages/PostScreen';
import SettingsScreen from './pages/SettingsScreen';

const Tab = createBottomTabNavigator();

export default function Routes() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Inicio" component={Home} />
            <Tab.Screen name="ListScreen" component={ListScreen} />
            <Tab.Screen name="Post" component={PostScreen} />
            <Tab.Screen name="NotificationsScreen" component={NotificationsScreen} />
            <Tab.Screen name="SettingsScreen" component={SettingsScreen} />
        </Tab.Navigator>
    )
}