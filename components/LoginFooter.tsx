import React from 'react';
import { View, Text } from 'react-native';
import loginStyles from '../Pages/loginStyles';

const LoginFooter = () => (
  <View style={loginStyles.footer}>
    <Text style={loginStyles.footerText}>Termos de Uso</Text>
    <Text style={loginStyles.footerText}>Política de Privacidade</Text>
    <Text style={loginStyles.footerText}>Ferramenta de Consentimento de Cookies</Text>
    <Text style={loginStyles.footerText}>© Crunchyroll, LLC</Text>
    <Text style={loginStyles.footerText}>PORTUGUÊS (BRASIL)</Text>
  </View>
);

export default LoginFooter;