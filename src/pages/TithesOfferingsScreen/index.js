import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const image = '../../../assets/images/Oferta-Dizimo-original.jpg';

export default function TithesOfferingsScreen() {
    return (
        <View style={styles.container}>
            <Image source={require(image)} style={styles.image}></Image>
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
        width: '100%',
        height: '100%',
        /*    resizeMode: 'cover', */
        /*     justifyContent: 'center',
            alignItems: 'center', */
        /*        borderRadius: 2,
               borderWidth: 2, */
        /*   borderColor: 'coral', */
        backgroundColor: 'transparent',
        /*     width: 300,
            height: 20, */
        /*      paddingTop: 50,
             paddingRight: 0.1555, */
    }
});
