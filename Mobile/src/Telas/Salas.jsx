import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useState, useEffect, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';

// AXIOS
import axios from 'axios';
import Turmas from '../Componentes/Turmas';

export default function Salas() {
    const [turmas, setTurmas] = useState([]);

    async function BuscarTurmas() {
        try {
            const dados = await axios('http://10.188.10.100:3320/turma/turmas', {
                method: 'GET',
                timeout: 5000
            });
            setTurmas(dados.data);
        } catch (erro) {
            console.log(`erro ao trazer os dados devido: ${erro}`);
        }
    }

    useFocusEffect(
        useCallback(() => {
            BuscarTurmas();
        }, [])
    );

    // Colocando um relógio no app
    const [dataHora, setDataHora] = useState('');

    useEffect(() => {
        const atualizarDataHora = () => {
            const data = new Date();
            const hora = data.toLocaleTimeString();
            const dia = data.toLocaleDateString();
            setDataHora(`${dia} ${hora}`);
        };
        atualizarDataHora();
        const intervalId = setInterval(atualizarDataHora, 1000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <View style={styles.container}>
            <View>
                <Image source={require('../Imagens/triangulo.png')} />
                <View style={{ marginTop: -100, marginLeft: -10 }}>
                    <Text style={styles.tituloSala}>CE 138 - Santo Anastácio</Text>
                </View>
            </View>

            <View style={styles.dataHoras}>
                <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}>
                    {dataHora}
                </Text>
            </View>

            <View style={{ height: '70%' }}>
                <Turmas data={turmas} />
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
    tituloSala: {
        fontSize: 35,
        color: 'white',
        fontWeight: '900',
        width: 300,
        textAlign: 'center'
    },
    dataHoras: {
        backgroundColor: '#0003',
        width: 150,
        height: 70,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 20
    }
});