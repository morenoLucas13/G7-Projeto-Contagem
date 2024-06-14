import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Checkbox } from 'react-native-paper';
import React, { useState } from 'react';

export default function Cadastro() {
  const navigation = useNavigation()

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [checked, setChecked] = useState(false);

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
        <Text style={styles.text}>CADASTRE-SE</Text>

        {/* Campo Email */}
        <Text style={styles.texts}>Nome Completo:</Text>
        <TextInput placeholder='Digite seu nome. . .' style={styles.txtInput}
          value={email} onChangeText={setEmail}
        />

        <Text style={styles.texts}>E-mail Escolar:</Text>
        <TextInput keyboardType='visible-password' placeholder='Digite seu E-mail. . .' style={styles.txtInput}
          value={senha} onChangeText={setSenha}
        />

        <Text style={styles.texts}>RM:</Text>
        <TextInput keyboardType='visible-password' placeholder='Digite seu RM. . .' style={styles.txtInput}
          value={senha} onChangeText={setSenha}
        />

        {/* Campo Senha */}
        <Text style={styles.texts}>Senha:</Text>
        <TextInput keyboardType='visible-password' placeholder='Digite sua Senha. . .' style={styles.txtInput}
          value={senha} onChangeText={setSenha}
        />
        <Text style={{ fontSize: 20 }}> NÍVEL DE ACESSO:</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', top: 30, end: 30 }}>
          <Text style={{ bottom: 20, start: 50 }}>Estudante</Text>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
          />
          <Text style={{ bottom: 20, start: 50 }}>Professor</Text>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
          />
          <Text style={{ bottom: 20, start: 50 }}>Cordenação</Text>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
          />
        </View>

        <TouchableOpacity style={styles.btn}
          onPress={() => { navigation.navigate('tela_login') }}
        >
          <Text style={{ fontStyle: 'italic', fontWeight: '900', color: '#ffff' }}>Cadastrar</Text>
        </TouchableOpacity>


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
    paddingBottom: 10,
    paddingHorizontal: 35

  },
  itens: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black'

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
  texts: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
    width: 300
  }

});
