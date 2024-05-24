import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacityBase } from 'react-native'
import React from 'react'

export default function Salas() {
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

                    <View style={styles.caixaContainer}>

                        <Text>3º Ensino Médio</Text>
                        
                        <Text>30</Text>

                        {/* <TouchableOpacityBase>
                            <Text>Oii</Text>
                        </TouchableOpacityBase> */}
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
    },
    caixaContainer: {
        width: 300,
        height: 150,
        backgroundColor: '#c29893',
        borderRadius: 20,
        flexDirection: 'row'
    }
})


