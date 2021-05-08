import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon, Feather } from '@expo/vector-icons';
/* import { LinearGradient } from '@expo/linear-gradient'; */

import HomeScreen from './pages/HomeScreen';
import ListScreen from './pages/ListScreen';
import NotificationsScreen from './pages/NotificationsScreen';
import PostScreen from './pages/PostScreen';
import SettingsScreen from './pages/SettingsScreen';

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
                    tabBarIcon: ({ color, size }) => (
/*                         <LinearGradient style={styles.iconTabRound} start={{ x: 0, y: 1 }} end={{ x: 0, y: 0 }} colors={['#403D39', '#020E26']}>
 */                            <Feather name="edit" size={26} color={'#020E26'} />
/*                         </LinearGradient>
 */                    )
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