import { NavigationContainer } from '@react-navigation/native';
import Abertura from './src/Telas/Abertura';
import Navegacao from './src/Telas/Navegacao';
import { useEffect } from 'react';
import { useState } from 'react';

export default function App() {
    const [ocultarAbertura, setOcultarAbertura] = useState(false)
    useEffect(()=>{
        setTimeout(()=>{
            setOcultarAbertura(true)
        }, 2500)
    }, [])
    return (
        <NavigationContainer>
          {ocultarAbertura  ?  <Navegacao/> : <Abertura/>}
        </NavigationContainer>
    )
}