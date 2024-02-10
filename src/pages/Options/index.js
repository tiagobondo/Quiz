import {
    View,
    Text,
    StatusBar,
    ScrollView
} from 'react-native'

import {styles} from './style'

export default function Options(){
  return(
    <View style={styles.container}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'}/>
      <ScrollView>

         <Text style={styles.textOptions}>
           O jogo apresenta várias opções para os jogadores onde o mesmo tem a hipótese de obter ajuda caso a questão levantada não esteja ao seu alcance. Também dispõe algumas opções como: Apoio1, Apoio2 e a opção de desistir do jogo e recomeçar.
         </Text>


      </ScrollView>
    </View>
  )}

export {Options}