import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

export default function Caixatexto({texto, placeholder, value, onChangeText}) {
    return (
        <View>
            <Text style={styles.texts}>{texto}</Text>
            <TextInput placeholder={placeholder} style={styles.txtInput}
                value={value} onChangeText={onChangeText}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    txtInput: {
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 10,
        padding: 10,
        width: 300,
        backgroundColor: '#e5937c',
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold'
      },
      texts: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'black',
        width: 300,
        marginTop: 15
      }
})