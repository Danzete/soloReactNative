import React, { useState } from 'react';
import { View, Text, TouchableOpacity, } from 'react-native';
import loginStyles from './loginStyles';
import Logo from '../components/Logo';
import LoginInput from '../components/LoginInput';
import LoginFooter from '../components/LoginFooter';


const Login = () => {
  const [email, setEmail] = useState('');

  return (
    <View style={loginStyles.container}> 
      <Logo />
      <Text style={loginStyles.title}>Login</Text>
      <LoginInput value={email} onChangeText={setEmail} />
      <TouchableOpacity style={loginStyles.button}>
        <Text style={loginStyles.buttonText}>PRÓXIMO</Text>
      </TouchableOpacity>
      <View>
        <TouchableOpacity>
          <Text style={loginStyles.link}>ESQUECEU A SENHA? | CRIAR CONTA</Text>
        </TouchableOpacity>
      </View>
      <LoginFooter />
    </View>
  );
};

export default Login;
