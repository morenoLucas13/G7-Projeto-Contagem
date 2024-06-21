import { StyleSheet, View, Text, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import React, { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';

// COMPONENTES
import Alunos from '../Componentes/Alunos';

// AXIOS
import axios from 'axios';

export default function Contagem() {
  const route = useRoute();
  const { idTurma } = route.params;  // Obter o idTurma dos parâmetros de navegação
  const [alunos, setAlunos] = useState([]);

  async function BuscarAlunos() {
    try {
      const dados = await axios(`http://10.188.10.100:3320/nome/nomes?idTurma=${idTurma}`, {
        method: 'GET',
        timeout: 5000
      });
      setAlunos(dados.data);
    } catch (erro) {
      console.log(`erro ao trazer os dados devido: ${erro}`);
    }
  }

  useFocusEffect(
    useCallback(() => {
      BuscarAlunos();
    }, [idTurma])  // Adicione idTurma como uma dependência
  );

  return (
    <View style={styles.container}>
      <View>
        <Image source={require('../Imagens/triangulo.png')} />
        <View style={{ marginTop: -90, marginLeft: -10 }}>
          <Text style={styles.tituloSala}>Contagem</Text>
        </View>
      </View>

      <View style={styles.listaAluno}>
        <Alunos data={alunos} idTurma={idTurma} />
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
  listaAluno: {
    backgroundColor: '#B18E8E',
    width: 330,
    height: 440,
    borderRadius: 20,
    padding: 10,
    marginBottom: 100
  },
  tituloSala: {
    fontSize: 35,
    color: 'white',
    fontWeight: '900',
    width: 300,
    textAlign: 'center'
  }
});