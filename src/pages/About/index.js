import {
    View,
    Text,
    FlatList,
    ScrollView,
    StatusBar
} from 'react-native'

import {styles} from './style'

export default function About(){
  return(
    
      <View style={styles.container}>
        <StatusBar backgroundColor={"#fff"} barStyle={'dark-content'}/>
      <ScrollView>
    
       <Text style={styles.textAbout}>
       "Conheço o IMPU" não é apenas um simples jogo de perguntas e respostas; é uma jornada educativa que o levará a explorar os diversos aspectos deste renomado instituto. Desde sua criação, este jogo poderá ser uma ferramenta valiosa para divulgar informações sobre o Instituto Médio Politécnico do Uíge, desafiando os jogadores a testarem seu conhecimento.
       </Text>

       <Text style={styles.textAbout}>Música: Alan Walker  Alone Lyrics</Text>
       <Text style={styles.textAbout}>MIT License</Text>

       <Text  style={styles.textAbout}>
        Permission is hereby granted, free of charge, to any person obtaining a copy
        of this software and associated documentation files (the "Software"), to deal
        in the Software without restriction, including without limitation the rights
        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
        copies of the Software, and to permit persons to whom the Software is
        furnished to do so, subject to the following conditions:
        </Text>

        <Text  style={styles.textAbout}>
        The above copyright notice and this permission notice shall be included in all
        copies or substantial portions of the Software.
        </Text>

        <Text  style={styles.textAbout}>
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
        SOFTWARE.
       </Text>

       <Text style={styles.textAbout}>Copyright (c) 2024 Tiago Pedro Menenga Bondo</Text>
       
       </ScrollView>
    </View> 
)}

export {About}