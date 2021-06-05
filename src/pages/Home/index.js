import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Book from '../../components/Book';
import New from '../../components/New';
import Recommended from '../../components/Recommended';

import Swiper from 'react-native-swiper';

export default function Home() {
  const navigation = useNavigation();

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: '#FFF' }}
    >

      <View style={styles.container}>
        <View style={styles.sliderContainer}>
          <Swiper
            autoplay
            horizontal={false}
            height={200}
            activeDotColor="#FF6347"
            onPress={() => navigation.navigate('Mais')}
          >
            <View style={styles.slide}>
              <Image
                source={require('../../../assets/images/Foto5.jpg')}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>
            <View style={styles.slide}>
              <Image
                source={require('../../../assets/images/Foto3.jpg')}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>
            <View style={styles.slide}>
              <Image
                source={require('../../../assets/images/Foto8.jpg')}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>
          </Swiper>
        </View>
      </View>

      <View style={styles.contentNew}>
        <Text style={[styles.title, { marginTop: 36 }]}>Ministério Atrium F2</Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingHorizontal: 15, }}>
        <New
          cover={require('../../../assets/images/Foto1.jpg')}
          name="Louvor"
          description="Ministério Atrium F2 - Filipenses Capitulo 2."
          onPress={() => navigation.navigate('Mais')}
        />

        <New
          cover={require('../../../assets/images/Foto2.jpg')}
          name="Adoração"
          description="Ministério Atrium F2 - Filipenses Capitulo 2."
          onPress={() => { }}
        />

        <New
          cover={require('../../../assets/images/Foto3.jpg')}
          name="Worship"
          description="Ministério Atrium F2 - Filipenses Capitulo 2."
          onPress={() => { }}
        />

      </ScrollView>

      <Text style={[styles.title, { marginTop: 20 }]}>
        Participe das nossas reuniões e seja abençoado!
      </Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingHorizontal: 15 }}>
        <Recommended
          cover={require('../../../assets/images/Foto8.jpg')}
        />
        <Recommended
          cover={require('../../../assets/images/Foto2.jpg')}
        />
        <Recommended
          cover={require('../../../assets/images/Foto3.jpg')}
        />
      </ScrollView>

      <Text style={[styles.titleBook, { marginTop: 1 }]}>
        Adquira agora sua agenda da "Academia da Leitura!"
      </Text>

      <Book
        coverBook={require('../../../assets/images/Agenda.png')}
        name="Agenda Acadêmia da Leitura"
        onPress={() => navigation.navigate('Mais')}
      />

      {/* Esse Text é só pra dar um espaço entre um post e outro */}
      <Text style={[styles.titleBook, { marginBottom: 62 }]}>
      </Text>



    </ScrollView>
  );
}

const styles = StyleSheet.create({
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
  },
  titleBook: {
    paddingHorizontal: 15,
    fontFamily: 'Montserrat_700Bold',
    fontSize: 18,
    color: '#4f4a4a',
  },
  sliderContainer: {
    height: 200,
    width: '90%',
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
  },
});