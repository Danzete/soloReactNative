import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../styles';

const Banner = () => (
  <View style={styles.banner}>
    <Image
      source={require('../assets/fireforce.jpg')}
      style={styles.bannerImage}
      resizeMode="cover"
    />
    <View style={styles.bannerContent}>
      <Text style={styles.bannerTitle}>Fire Force</Text>
      <Text style={styles.bannerDesc}>
        Shinra e seus companheiros estão prontos para entrar para a Brigada de Incêndio para impedir que os demônios flamejantes, chamados de Infernais, incendeiem toda a cidade...
      </Text>
      <TouchableOpacity style={styles.bannerButton}>
        <Text style={styles.bannerButtonText}>COMEÇAR A ASSISTIR</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default Banner;