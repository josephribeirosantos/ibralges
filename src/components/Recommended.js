import React from 'react';
import { View, StyleSheet, ImageBackground, Text} from 'react-native';

export default function Recommended({ cover }) {
 return (
   <ImageBackground
   source={cover}
   style={styles.container}
   blurRadius={3}
   >
   </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container:{
    height: 130,
    width: 230,
    marginRight: 20,
    marginBottom: 40,
    opacity: 0.8,
    backgroundColor: '#000',
    marginLeft: 3,
    padding: 12,
    marginTop: 20,
  },
  house:{
   fontFamily: 'Montserrat_700Bold',
   color: '#FFF',
   fontSize: 15,
  },
  description:{
    fontSize: 12,
    fontFamily: 'Montserrat_700Bold',
    color: '#FFF',
  },
  shadow:{
    textShadowOffset: { width: 1, height: 2},
    textShadowRadius: 3,
    textShadowColor: '#000'
  }
});