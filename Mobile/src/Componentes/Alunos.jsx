import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import ItemListaContagemAlunos from './ItemListaContagemAlunos';

export default function Alunos({ data, idTurma }) {
  const navigation = useNavigation();

  const enviarDados = () => {
    const totalAlunos = data.length;
    const ausentes = data.filter(item => item.marcado).length;
    const presentes = totalAlunos - ausentes;
    const listaAusentes = data.filter(item => item.marcado).map(item => item.nome_pes).join(', ');

    const contagem = {
      idusuario: 1,
      idturmas: idTurma,
      quantidade_geral_cont: presentes,
      lista_ausentes_cont: listaAusentes,
      data_cont: new Date().toISOString()
    };

    axios.post('http://10.188.10.100:3320/contagem', contagem)
      .then((response) => {
        console.log('Dados de contagem enviados com sucesso:', response.data);
        navigation.navigate('tela_sala');
      })
      .catch((error) => {
        console.error('Erro ao enviar dados de contagem:', error);
      });
  };

  return (
    <>
      <View>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View>
              <ItemListaContagemAlunos
                key={item.id}
                nome={item.nome_pes}
                onMarcarItem={(marcado) => { item.marcado = marcado }} />
            </View>
          )}
          keyExtractor={(item) => item.idpessoas}
        />
      </View>

      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity style={styles.btn} onPress={enviarDados}>
          <Text style={styles.btnText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  texto: {
    fontSize: 18,
    fontWeight: '700'
  },
  btn: {
    backgroundColor: 'red',
    padding: 15,
    marginTop: 20,
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 10,
    width: 200
  },
  btnText: {
    fontStyle: 'italic',
    fontWeight: '900',
    color: 'white',
    fontSize: 20,
    textAlign: 'center'
  }
});
