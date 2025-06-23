import React from 'react';
import { Image } from 'react-native';
import loginStyles from '../Pages/loginStyles';


const Logo = () => (
  <Image
    source={require('../assets/logo.png')}
    style={loginStyles.logo}
  />
);

export default Logo;