import React from 'react';
import { TextInput } from 'react-native';
import loginStyles from '../Pages/loginStyles';


const LoginInput = ({ value, onChangeText }) => (
  <TextInput
    style={loginStyles.input}
    placeholder="E-mail ou Número de Telefone"
    placeholderTextColor="#fff"
    value={value}
    onChangeText={onChangeText}
  />
);

export default LoginInput;