import React from 'react';
import { Image } from 'react-native';
import styles from '../styles';

const AnimeIcon = ({ image }) => (
  <Image source={image} style={styles.animeImage} resizeMode="cover" />
);

export default AnimeIcon;