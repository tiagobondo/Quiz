import {
  View,
  Text,
  ActivityIndicator
} from 'react-native'

export default function ActiveIndicator({color}) {
  return (
    <View>
      <ActivityIndicator
      size={'large'}
      color={color}
      />
    </View>
  )
}