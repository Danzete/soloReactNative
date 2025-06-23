import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles';
import AnimeIcon from './AnimeIcon';

const AnimeItem = ({ title, image }: { title: string; image: number }) => (
  <View style={styles.animeItem}>
    <AnimeIcon image={image} />
    <Text style={styles.animeTitle}>{title}</Text>
  </View>
);

export default AnimeItem;