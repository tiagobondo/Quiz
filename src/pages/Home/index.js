import Recat, { useState } from 'react'
import {
        View,
        Text,
        TouchableOpacity,
        BackHandler
} from 'react-native';
//import Sound from 'react-native-sound'
import { Audio } from 'expo-av'

import {Title} from '../../components/Title'
import {styles} from './style'

export default function Home(props){

    const closeApp = ()=>{
        BackHandler.exitApp()
    }

   const loading = async()=>{   
        const som = new Audio.Sound();
        try{
            await som.loadAsync(require('../../../assets/audios/sound.mp3'));
            await som.playAsync();

        }catch(error){
            console.log('Erro', error)
        }


   }

  return(
    <View style={styles.container} onLayout={()=>loading()}>

      <Text style={styles.Title}>Seja Bem-Vindo ao</Text>
      <Text style={styles.SubTitle}>Conheço o IMPU</Text>
      
    <TouchableOpacity style={styles.buttonPlay} onPress={()=>props.navigation.navigate('Playing')} activeOpacity={0.7}>
        <Text style={styles.textPlay}>Jogar</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.buttonHome} onPress={()=>props.navigation.navigate('About')} activeOpacity={0.7}>
        <Text style={styles.textButtonHome}>Acerca</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.buttonHome} onPress={()=>props.navigation.navigate('Options')} activeOpacity={0.7}>
        <Text style={styles.textButtonHome}>Opções</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.buttonHome} onPress={()=>closeApp()} activeOpacity={0.7}>
        <Text style={styles.textButtonHome}>Sair</Text>
    </TouchableOpacity>

    </View>
)}

export {Home}