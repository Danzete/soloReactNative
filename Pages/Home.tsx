import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from '../styles';
import Banner from '../components/Banner';
import AnimeItem from '../components/AnimeItem';

const Home = () => (
  <View style={styles.container}>
    <ScrollView>
      <Banner />
      <Text style={styles.sectionTitle}>Recomendações para Você</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 20 }}> 
        <AnimeItem
          title="One Piece"
          image={require('../assets/onepiece.jpg')}
        />
        <AnimeItem
          title="Attack on Titan"
          image={require('../assets/attack_on_titan.jpg')}
        />
        <AnimeItem
          title="My Hero Academia"
          image={require('../assets/my_hero_academia.jpg')}
        />
        <AnimeItem
          title="Tokyo Revengers"
          image={require('../assets/tokyorevengers.jpg')}
        />
      </ScrollView>
      <Text style={styles.sectionTitle}>Novidades</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 20 }}>
        <AnimeItem
          title="Solo Leveling"
          image={require('../assets/sololeveling.jpg')}
        />
        <AnimeItem
          title="Mr Osomatsu"
          image={require('../assets/mrosomatsu.jpg')}
        />
        <AnimeItem
          title="Mashle"
          image={require('../assets/mashle.jpg')}
        />
        <AnimeItem
          title="Dr.Stone"
          image={require('../assets/drstone.jpg')}
        />
      </ScrollView>
    </ScrollView>
    <View style={styles.footer}>
      <Text style={styles.footerText}>Início</Text>
      <Text style={styles.footerText}>Minhas Listas</Text>
      <Text style={styles.footerText}>Conta</Text>
    </View>
  </View>
);

export default Home;