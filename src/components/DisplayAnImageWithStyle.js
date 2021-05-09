
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import assets from './assets'

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    stretch: {
        width: 50,
        height: 200,
        resizeMode: 'stretch',
    },
});

const DisplayAnImageWithStyle = () => {
    return (
        <img src={mbway} alt='mbway'
        />
    )
}

export default DisplayAnImageWithStyle;