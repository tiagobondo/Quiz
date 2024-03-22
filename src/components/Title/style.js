import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title:{
    fontSize:Platform.OS == 'ios'?30:25,
    color:'#fff',
    fontWeight:'bold',
    textAlign:'center',
  }
})

export{styles}