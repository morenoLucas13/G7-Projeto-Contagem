import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Cardconteudo from '../Componentes/Cardconteudo'
import { useNavigation } from '@react-navigation/native';

export default function Salas() {
    async function BuscarTurmas() {
        try {
          const dados = await axios('http://10.188.10.109:3320/nome/nomes', {
            method: 'GET',
            timeout: 5000
          });
          setAlunos(dados.data);
        } catch (erro) {
          console.log(`erro ao trazer os dados devido: ${erro}`);
        }
      }

return (

    <View style={styles.container}>

        <View>
            <Image source={require('../Imagens/triangulo.png')} />
            <View style={{ marginTop: -100, marginLeft: -10 }}>
                <Text style={styles.tituloSala}>CE 138 - Santo Anastácio</Text>
            </View>
        </View>

        <View style={{ height: '70%' }}>
            <ScrollView>
                <View>
                    <Cardconteudo sala={'3º Ensino Médio'} quantidade={19} />
                    <Cardconteudo sala={'2º Ensino Médio'} quantidade={28} />
                    <Cardconteudo sala={'1º Ensino Médio'} quantidade={25} />
                    <Cardconteudo sala={'9º Ensino Fundamental'} quantidade={30} />
                    <Cardconteudo sala={'8º Ensino Fundamental'} quantidade={7} />
                    <Cardconteudo sala={'7º Ensino Fundamental'} quantidade={15} />
                    <Cardconteudo sala={'6º Ensino Fundamental Manhã'} quantidade={32} />
                    <Cardconteudo sala={'6º Ensino Fundamental Tarde'} quantidade={32} />
                    <Cardconteudo sala={'5º Ensino Fundamental'} quantidade={27} />
                    <Cardconteudo sala={'4º Ensino Fundamental'} quantidade={30} />
                    <Cardconteudo sala={'3º Ensino Fundamental'} quantidade={28} />
                    <Cardconteudo sala={'2º Ensino Fundamental'} quantidade={29} />
                    <Cardconteudo sala={'1º Ensino Fundamental'} quantidade={18} />
                </View>
            </ScrollView>
        </View>
    </View>
)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dfaa9d',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    tituloSala: {
        fontSize: 35,
        color: 'white',
        fontWeight: '900',
        width: 300,
        textAlign: 'center'
    }
})


