import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {  Ionicons } from '@expo/vector-icons';

export default function MoreScreen() { 
      return (
        <View style={styles.container} >
        <View style={{ height:200,  padding:60, backgroundColor: 'white', flex: 0.5 , marginHorizontal: 3,   marginTop: -532,} } >
            <Ionicons style={styles.icon} name="ios-add-circle" size={24} color="black" />
            <Text style={styles.title}>A Igreja</Text>
          </View>
         
          <View style={{ height:100, padding:40,  backgroundColor: 'white', flex: 0.5 , marginHorizontal: 4,  marginTop: -632, marginRight: -290, }} >
           <Ionicons name="ios-add-circle" size={24} color="black"/ >
          </View>
    
           <View style={{ backgroundColor: 'white', flex: 0.3,  borderRadius: 4,   marginHorizontal: 4, marginBottom:4, marginVertical: 4, marginTop: 4, }} >
            <Ionicons name="ios-add-circle" size={24} color="black" />
         </View>
    
         <View style={{ backgroundColor: 'white', flex: 0.3,  borderRadius: 4,   marginHorizontal: 4,  } } >
            <Ionicons name="ios-add-circle" size={24} color="black" />
          </View>
         
          <View style={{ backgroundColor: 'white', flex: 0.5, borderRadius: 4,  }} >
           <Ionicons name="ios-add-circle" size={24} color="gray"/ >
          <Text style={styles.title}>Plano de Leitura</Text>
          </View>
    
           <View style={{ backgroundColor: 'white', flex: 0.3,  borderRadius: 4,   marginHorizontal: 4, marginBottom: -121, }} >
            <Ionicons name="ios-add-circle" size={24} color="gray" />
         </View>
    
          </View>
    
      );
    }
    
    const styles = StyleSheet.create ({
      container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'gray',
      },
       title: {
            fontFamily: 'Montserrat_700Bold',
            fontSize: 12,
            color: '#000000',
            marginBottom: 11,
        },
       icon: {
          

        },
    })

