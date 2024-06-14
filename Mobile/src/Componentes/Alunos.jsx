import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Checkbox } from 'react-native-paper';

// COMPONENTES
import ItemListaContagemAlunos from './ItemListaContagemAlunos';

export default function Alunos({ data }) {
  return (
    <>
      <View>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View>
              <ItemListaContagemAlunos nome={item.nome_pes}
                onMarcarItem={(marcado) => { item.marcado = marcado }} />
            </View>
          )}
          keyExtractor={(item) => item.idpessoas}
        />
      </View>

      {/* Botão! */}
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity style={styles.btn} onPress={
          () => {
            //! Há duas maneiras de puxar todos os dados do Banco:

            // console.log('Alunos data   ', JSON.stringify(data, "\n", 2))
            // for (let i = 0; i < data.length; i++) {
            //   if (data[i].marcado == true) {
            //     console.log(data[i].nome_pes)
            //   }
            // }

            //? Usar o for para contar quando precionar o botão
            data.forEach((item) => { if (item.marcado == true) console.log(item.nome_pes) })

            let listaMarcados = data.filter((item) => item.marcado == true)
            console.log(JSON.stringify(listaMarcados, '\n', 2))

            console.log(item)

          }}
        >
          <Text style={{
            fontStyle: 'italic',
            fontWeight: '900',
            color: 'white',
            fontSize: 20,
            textAlign: 'center'
          }}>
            Enviar
          </Text>
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
    borderRadius: 10,
    marginTop: 20,
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 10,
    width: 200
  }
});