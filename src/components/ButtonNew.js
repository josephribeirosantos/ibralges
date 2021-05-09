import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Icon, Entypo, Feather } from '@expo/vector-icons';

export default function ButtonNew() {
    return (
        <LinearGradient style={styles.iconTabRound} start={{ x: 0, y: 1 }} end={{ x: 0, y: 0 }} colors={['#898C8F', '#141F26']}>
            <Feather name="plus" size={26} color='#FFF' />
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconTabRound: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginBottom: 25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 6,
        shadowColor: '#4F9F7C',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    }
})