import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function Abertura() {
    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Text style={{ color: '#fff', fontSize: 60, fontWeight: '900', marginTop: 28 }} > SESI </Text>
                <Text style={{ color: '#fff', fontSize: 55, fontWeight: '900', marginTop: 28 }} > SENAI </Text>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red'
    },
    containerLogo: {
        flex: 2,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',

    },
})
