import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import House from '../../components/House';
import New from '../../components/New';
import Recommended from '../../components/Recommended';

export default function Home() {
  const navigation = useNavigation();

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: '#FFF' }}
    >

      <View style={styles.contentNew}>
        <Text style={[styles.title, { marginTop: 36 }]}>Ministério Atrium F2</Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingHorizontal: 15, }}>
        <New
          cover={require('../../../assets/images/Foto1.jpg')}
          name="Casa de Praia"
          description="Casa nova uma quadra do mar, lugar seguro e monitorado 24horas."
          onPress={() => navigation.navigate('Mais')}
        />

        <New
          cover={require('../../../assets/images/Foto2.jpg')}
          name="Casa Floripa"
          description="Casa nova uma quadra do mar, lugar seguro e monitorado 24horas."
          onPress={() => { }}
        />

        <New
          cover={require('../../../assets/images/Foto3.jpg')}
          name="Rancho SP"
          description="Casa nova uma quadra do mar, lugar seguro e monitorado 24horas."
          onPress={() => { }}
        />

      </ScrollView>

      <Text style={[styles.title, { marginTop: 20 }]}>
        Participe das nossas reuniões e seja abençoado!
      </Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingHorizontal: 15 }}>
        <Recommended
          cover={require('../../../assets/images/Foto5.jpg')}
        />
        <Recommended
          cover={require('../../../assets/images/Foto2.jpg')}
        />
        <Recommended
          cover={require('../../../assets/images/Foto3.jpg')}
        />
      </ScrollView>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginVertical: 20,
  },
  inputArea: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    width: '98%',
    backgroundColor: '#FFF',
    elevation: 2,
    paddingHorizontal: 10,
    height: 37,
    borderRadius: 10,
  },
  input: {
    fontFamily: 'Montserrat_500Medium',
    paddingHorizontal: 10,
    fontSize: 13,
    width: '90%'
  },
  contentNew: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  title: {
    paddingHorizontal: 15,
    fontFamily: 'Montserrat_700Bold',
    fontSize: 18,
    color: '#4f4a4a',
  }
});