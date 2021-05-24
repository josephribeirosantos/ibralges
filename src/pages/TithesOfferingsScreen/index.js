import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const image = { uri: 'https://github.com/josephribeirosantos/josephribeirosantos.github.io/blob/main/Oferta-Dizimo.jpg?raw=true' };

export default function TithesOfferingsScreen() {
    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}></ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        /* width: 300,
        height: 20, */
        /*         paddingTop: 50, */
        /*   paddingRight: 0.1555, */

    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        borderWidth: 2,
        /*   borderColor: 'coral', */
        backgroundColor: 'transparent',
        /*     width: 300,
            height: 20, */
        /*      paddingTop: 50,
             paddingRight: 0.1555, */
    }
});
