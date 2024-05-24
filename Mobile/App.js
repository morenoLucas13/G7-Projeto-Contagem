import React from 'react'
import { StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/Telas/Login.js';
import Salas from './src/Telas/Salas.js';
import Contagem from './Contagem.jsx'

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{ headerShown: false }} name="tela_login" component={Login} />
                <Stack.Screen options={{ headerShown: false }} name="tela_sala" component={Salas} />
                {/* <Stack.Screen options={{ headerShown: false }} name="tela_contagem" component={Contagem} /> */}

            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({});