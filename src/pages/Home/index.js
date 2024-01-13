import {
        View,
        Text,
        TouchableOpacity
} from 'react-native';

import {Title} from '../../components/Title'
import {styles} from './style'

export default function Home(props){
  return(
    <View style={styles.container}>

      <Text style={styles.Title}>Seja Bem-Vindo ao</Text>
      <Text style={styles.SubTitle}>Conheço o IMPU</Text>
      
    <TouchableOpacity style={styles.buttonPlay} onPress={()=>props.navigation.navigate('Playing')} activeOpacity={0.7}>
        <Text style={styles.textPlay}>Jogar</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.buttonAbout} onPress={()=>props.navigation.navigate('About')} activeOpacity={0.7}>
        <Text style={styles.textAbout}>Acerca</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.buttonOptions} onPress={()=>props.navigation.navigate('Options')} activeOpacity={0.7}>
        <Text style={styles.textOptions}>Opções</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.buttonExit} onPress={()=>alert('Sair')} activeOpacity={0.7}>
        <Text style={styles.textExit}>Sair</Text>
    </TouchableOpacity>

    </View>
)}

export {Home}