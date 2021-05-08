import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Icon, Entypo, Feather } from '@expo/vector-icons';

export default function ButtonNew() {
    return (
        <View style={styles.container}>
            <LinearGradient style={styles.iconTabRound} start={{ x: 0, y: 1 }} end={{ x: 0, y: 0 }} colors={['#403D39', '#020E26']} >
                <Feather name="edit" size={26} color={'#020E26'} />
            </LinearGradient >
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    }
})