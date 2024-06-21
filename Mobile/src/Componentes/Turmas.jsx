import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Cardconteudo from './Cardconteudo';

export default function Turmas({ data }) {
  return (
      <FlatList
          data={data}
          renderItem={({ item }) => (
              <Cardconteudo
                  key={item.idturmas.toString()}
                  sala={item.nome_tur}
                  quantidade={item.quantidade_geral_cont}
                  idTurma={item.idturmas}
              />
          )}
      />
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
    borderRadius: 10,
    marginTop: 20,
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 10,
    width: 200
  }
});