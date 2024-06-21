import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Cardconteudo({ sala, quantidade, idTurma }) {
    const navigation = useNavigation();

    return (
        <View>
            <View style={styles.caixaContainer}>
                <View style={{ justifyContent: 'center', width: 190, paddingLeft: 10 }}>
                    <Text style={{
                        fontSize: 30,
                        fontWeight: '900',
                        color: '#000000',
                        textAlign: 'center'
                    }}
                    >{sala}</Text>
                </View>

                <View style={{ justifyContent: 'center', width: 80 }}>
                    <Text style={{
                        textAlign: 'center',
                        fontSize: 50,
                        color: 'red',
                        fontWeight: '900'
                    }}
                    >{quantidade}</Text>
                </View>

                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <TouchableOpacity style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 65,
                        height: 62,
                        backgroundColor: '#d24a4a',
                        borderRadius: 30
                    }} onPress={() => {
                        if (idTurma) {
                            navigation.navigate('tela_contagem', { idTurma })
                        }
                    }}>
                        <Image source={require('../Imagens/ocean_eyes.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    caixaContainer: {
        width: 350,
        height: 150,
        backgroundColor: '#c29893',
        borderRadius: 20,
        flexDirection: 'row',
        marginTop: 20
    }
});