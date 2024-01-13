import {
  View,
  Text
} from 'react-native'

import {styles} from './style'

import {Quiz} from '../../components/Quiz'

export default function Playing(){
  return(
    <View style={styles.container}>
      <Quiz/>
    </View>
  )}

export {Playing}