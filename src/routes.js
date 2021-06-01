import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './pages/Home';
import MoreScreen from './pages/MoreScreen';
import NotificationsScreen from './pages/NotificationsScreen';
import AppointmentScreen from './pages/AppointmentScreen';
import TithesOfferingsScreen from './pages/TithesOfferingsScreen';

import ButtonNew from './components/ButtonNew';

import { Feather } from '@expo/vector-icons';

import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

function Routes() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    switch (route.name) {
                        case 'Home':
                            iconName = 'home';
                            break;
                        case 'Contribua':
                            iconName = 'heart';
                            break;
                        case 'Agendamento':
                            iconName = 'plus';
                            break;
                        case 'Pregações':
                            iconName = 'youtube';
                            break;
                        case 'Mais':
                            iconName = 'list';
                            break;
                        default:
                            iconName = 'circle';
                            break;
                    }

                    return <Feather name={iconName} size={size} color={color} />;

                },
            })}
            tabBarOptions={{
                activeTintColor: '#0D0D0D',
                inactiveTintColor: '#898C8F',
                borderTopColor: 'transparent',
                showLabel: true,
            }} initialRouteName="Home"
        >
            <Tab.Screen name="home" component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="home" color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen name="Contribua" component={TithesOfferingsScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="heart" color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen name="Agendamento" component={AppointmentScreen}
                options={{
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

export default Routes;