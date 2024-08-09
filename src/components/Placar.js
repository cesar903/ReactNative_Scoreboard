import React, { useState } from "react"
import { View, Text, Pressable } from "react-native"
import estilo from '../styles/Placar'

export default function Placar(props) {
    const [pontuacao, definirPontuacao] = useState(0)

    return <View style={estilo.placar}>
        <Text style={estilo.placarTitulo}> {props.titulo} </Text>
        <Text style={estilo.placarPontuacao}> {pontuacao} </Text>
        <View style={estilo.placarCampo}>
            <Pressable 
            style={estilo.placarBotao}
            onPress={ () => definirPontuacao(pontuacao + 1) }>
                <Text> + </Text>
            </Pressable>
            <Pressable 
            style={estilo.placarBotao}
            onPress={ () => definirPontuacao(pontuacao - 1) }>
                <Text> - </Text>
            </Pressable>
        </View>
    </View>
}
