import {
    View,
    Text,
    FlatList,
    ScrollView
} from 'react-native'

import {styles} from './style'
export default function About(){
  return(
    
      <View style={styles.container}>
      <ScrollView>

      <Text>Instituto médio politécnico do Uíge</Text>
       <Text style={styles.textAbout}>Instituto Médio Politécnico do Uíge (IMPU) anteriormente chamado de “Instituto Médio Politécnico Manuel Quarta Punza”, entrou em funcionamento um ano antes da sua inauguração oficial. inaugurado no dia 03 de janeiro de 2010 pelo Ex Ministro da Educação, é uma escola médio-técnico angolano e de propriedade do Ministério da Educação de Angola. O nome referido é uma homenagem ao guerrilheiro angolano e aquele que um dia foi Governador da província do Uíge Manuel Quarta Punza. Este estabelecimento de ensino Técnico, em função da sua especificidade, visa proporcionar aos alunos conhecimentos gerais e técnicos para os diferentes ramos de actividade socioeconómico do País. Permitindo a inserção dos mesmos na vida profissional e o acesso á Universidade. O Instituto Médio Politécnico do Uíge está localizado na província do Uíge município do Uíge. Nos termos da lei, o IMPU é uma entidade jurídica de direito, com estatuto de estabelecimento público, dotado de autonomia estatutária, pedagógica, administrativa, técnico-científica, disciplinar e financeira, destinada a formação técnico-profissional. Como instrumento jurídico-legal, o decreto ministerial nº 155/08, de 30 de junho e publicado no diário da república nº 141, 1º serie, oficializa o seu funcionamento. 
       </Text>
       
       </ScrollView>
    </View> 
)}

export {About}