import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Login from './Login.jsx';
import Salas from './Salas.jsx';
import Contagem from './Contagem.jsx'
import BemVindo from './BemVindo.jsx'

const Stack = createNativeStackNavigator();

export default function Navegacao() {
  return (
    <Stack.Navigator>
                <Stack.Screen options={{ headerShown: false }} name="tela_BemVindo" component={BemVindo} />
                <Stack.Screen options={{ headerShown: false }} name="tela_login" component={Login} />
                <Stack.Screen options={{ headerShown: false }} name="tela_sala" component={Salas} />
                <Stack.Screen options={{ headerShown: false }} name="tela_contagem" component={Contagem} />

    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})