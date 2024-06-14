import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native'

export default function BemVindo() {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>


            <View style={styles.containerLogo}>
                <Animatable.Image
                    animation="flipInY"
                    source={require('../Imagens/logo.png')}
                    style={{ width: '80%' }}
                    resizeMode="contain"
                />
            </View>


            <Animatable.View delay={1600} animation="fadeInUp" style={styles.containerForm}>
                <Animatable.Text animation='pulse' easing="ease-out" style={styles.title}> Monitore, Organize a Alimentação de nossos Alunos! </Animatable.Text>
                <Text style={styles.text}> Faça Login para começar </Text>

                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('tela_login')}>
                    <Animatable.Text animation='pulse' easing="ease-out" iterationCount="infinite" style={styles.btnText}> Acessar  </Animatable.Text>
                </TouchableOpacity>


            </Animatable.View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dfaa9d'
    },
    containerLogo: {
        flex: 2,
        backgroundColor: '#dfaa9d',
        justifyContent: 'center',
        alignItems: 'center',

    },
    containerForm: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,
    },
    text: {
        color: '#a1a1a1'
    },
    btn: {
        position: 'absolute',
        backgroundColor: 'red',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    }
})