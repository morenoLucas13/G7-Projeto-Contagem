import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import axios from 'axios';

import Caixatexto from '../Componentes/Caixatexto';

export default function Login() {
  const navigation = useNavigation()

  const [email, setEmail] = useState('lucas.moreno@portalsesisp.org.br');
  const [senha, setSenha] = useState('Sesisp@2643');

  async function requisitaAutenticacao() {
    // Alert.alert(`O email é ${email} \ne a senha é ${senha}`)

    try {
      let resp = await axios(
        {
          method: 'post',
          url: 'http://10.188.10.100:3320/login',
          data: { email: email, senha: senha },
          timeout: 3000
        }
      );

      // somente para visualizar os conteúdos das variáveis de resposta  
      console.log("== Status Code ==")
      console.log(resp.status)
      console.log("== Dados ==")
      console.log(resp.data)

      if (resp.status == 200) {
        if (resp.data.sucesso == true) {
          console.log("+++ SUCESSO +++")

          navigation.navigate('tela_sala')
        } else {
          console.log('+++ Login inválido +++')
          console.log(resp.data.erro)
        }
      } else {
        console.log('Ops. Não foi possivel se concluir a operação.')
        console.log(resp.data.erro)
      }
    } catch (error) {
      console.log(error)
      console.log('Ops. Não foi possivel se comunicar com o servidor.')
    }
  }

  return (
    <View style={styles.container}>
      <View >
        {/* Imagem */}
        <Image style={styles.image} source={require('../Imagens/logo.png')} />

        {/* TextInputs */}
        <Caixatexto
          texto={'Digite seu E-mail'}
          placeholder={'email@portalsesisp.org.br'}
          onChangeText={setEmail}
          value={email}
        />
        <Caixatexto
          texto={'Digite sua Senha'}
          placeholder={'Sesisp@*SEU_RM*'}
          onChangeText={setSenha}
          value={senha}
        />

        {/* Botão */}
        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity style={styles.btn}
          
            onPress={requisitaAutenticacao}>
            <Text style={{
              fontStyle: 'italic',
              fontWeight: '900',
              color: 'white',
              fontSize: 18,
              textAlign: 'center'
            }}>ENTRAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dfaa9d',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  btn: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 10,
    width: 200,
  },
  image: {
    width: 300,
    height: 335,
    marginTop: -40
  }
});

