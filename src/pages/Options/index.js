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
         Modo de Exploração:
          Neste modo, os jogadores podem explorar livremente o Instituto Médio Politécnico do Uíge e descobrir informações interessantes sobre sua história, instalações e atividades. Percorra os corredores virtuais do instituto, visite salas de aula, laboratórios e áreas comuns, e mergulhe na atmosfera educacional única desta instituição de ensino.
         </Text>

         <Text style={styles.textOptions}>
         Modo Solo:
          Teste seus conhecimentos em uma variedade de áreas, desde a história da instituição. Quanto mais perguntas você responder corretamente, mais você aprenderá sobre o instituto e acumulará pontos para subir no placar de líderes.
        </Text>

        


      </ScrollView>
    </View>
  )}

export {Options}