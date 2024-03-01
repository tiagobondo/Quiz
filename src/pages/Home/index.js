import {
        View,
        Text,
        TouchableOpacity,
        BackHandler
} from 'react-native';
//import Sound from 'react-native-sound'

import {Title} from '../../components/Title'
import {styles} from './style'

export default function Home(props){

    const closeApp = ()=>{
        BackHandler.exitApp()
    }

   /* const som = new Sound('../../../assets/audios/sound.mp3', null, (erro)=>{
        if(erro){
            console.log(erro)
        }
    })

    const loading = ()=>{
        som.play((sucess)=>{
            if(sucess){
                console.log('Reprodux')
            }
            else{
                console.log('Erro')
            }
        })
    }
    */

  return(
    <View style={styles.container}>

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