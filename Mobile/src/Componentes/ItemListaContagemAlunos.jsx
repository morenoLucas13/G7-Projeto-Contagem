import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Checkbox } from 'react-native-paper';


export default function ItemListaContagemAlunos({ id, nome, onMarcarItem }) {
    const [checado, setChecado] = useState(false);
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Checkbox
                status={checado ? 'checked' : 'unchecked'}
                uncheckedColor='black'
                color='#f94818'
                onPress={() => {
                    let status = !checado
                    setChecado(status)
                    onMarcarItem(status)
                }} />
            <Text style={styles.textoAlunos}>{nome}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textoAlunos: {
        fontSize: 16,
        textAlign: 'left',
        fontWeight: '900',
    }
})