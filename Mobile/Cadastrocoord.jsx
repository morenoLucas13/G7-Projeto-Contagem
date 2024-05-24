import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';

export default function Login() {
  const navigation = useNavigation()

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  async function requisitaAutenticacao() {  
    // Alert.alert(`O email é ${email} \ne a senha é ${senha}`)

    try {
      let resp = await fetch('http://10.0.2.2:3320/login',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: email, senha: senha })
        }
      );

      if (resp.ok) {
        let json = await resp.json()
        console.log(json)

        navigation.navigate('tela_home')
      } else {
        console.log('Erro na requisição')
      }

    } catch (error) {
        console.log('Erro :-)')
    }
  }

  return (
    
    <View style={styles.container}>
      <View style={styles.itens}>
      <Text style={{ fontSize: 35, start: -80, marginBottom: 100 , backgroundColor: '#e5937c', borderRadius:50 }}> Coordenação </Text>

        <Text style={styles.text}>Cadastre a sua Unidade Escolar</Text>

        {/* Campo Email */}
        <Text style = {styles.texts}>Cidade:</Text>
        <TextInput placeholder='Digite sua Cidade. . .' style={styles.txtInput}
          value={email} onChangeText={setEmail}
        />

        {/* Campo Senha */}
        <Text style = {styles.texts}>Número da Unidade:</Text>
        <TextInput keyboardType='visible-password' placeholder='CE. . .' style={styles.txtInput}
          value={senha} onChangeText={setSenha}
        />


        <TouchableOpacity style={styles.btn}
          onPress={() => { requisitaAutenticacao() }}
        >
          <Text style={{ fontStyle: 'italic', fontWeight: '900', color: '#ffff' }}>CADASTRAR</Text>
        </TouchableOpacity>

        <View style = {{ flexDirection: 'row' , alignItems:'center', top: 50, }}>
      
      
      
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
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingBottom: 100 ,
    paddingHorizontal: 35

  },
  itens: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
    marginBottom: 50,
   backgroundColor: 'red',
    borderRadius:  50
    

  },
  textLado: {
    fontSize: 70,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
    position: 'relative',
    textAlign: 'center',
    top: -110
  },
  txtInput: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    width: 300,
    backgroundColor: '#e5937c',
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  
  },
  logo: {
    flexDirection: 'column',
    width: 50,
    textAlign: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: '#d10000',
    height: '75%',
    // marginTop: 50,
    // paddingTop: 80,
    borderBottomLeftRadius: 10,
    
  },
  btn: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 10,
    margin: 10,
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 10,
    top: 40
  },
 texts:{
  fontSize: 25,
  fontWeight: 'bold',
  marginBottom: 10,
  color: 'black',
  width: 300
 }

});
