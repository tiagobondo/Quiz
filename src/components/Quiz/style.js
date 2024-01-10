import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containerQuiz:{
    width:'100%',
    flex:1,
    alignItems:'center',
    paddingTop:70
  },

  containerQuestao:{
    marginTop:20,
    width:'97%',
    height:'15%',
    backgroundColor:'#00000069',
    marginBottom:20,
    borderRadius:10,
    padding:20,
  },

  questao: {
    fontSize:16,
    color:'#fff',
    textAlign:'center',
  }, 

  respostas: {
    width:'97%',
    height:40,
    fontSize:16,
    textAlign:'center',
    backgroundColor:'#d4002e',
    marginBottom:10,
    borderRadius:5,
    borderWidth:1,
    borderColor:'#ffffff2d'
  },

  textQuestoes:{
    color:'#fff',
    textAlign:'center',
    padding:10,
    fontSize:16
  },

  pontos: {
    alignSelf:'flex-start',
    marginLeft:'2%',
    fontSize:16,
    color:'#fff',
    fontWeight:'bold',
    marginTop:'2%'
  },

  containerHelp: {
    flexDirection:'row',
    position:'absolute',
    bottom:'3%'
  },

  buttonCerta:{
    height:50,
    width:50,
    borderWidth:1,
    borderColor:'#fff',
    backgroundColor:'#00000071',
    padding:10,
    borderRadius:100,   
    marginRight:10
  },

  buttonDesistir:{
    height:50,
    width:50,
    borderWidth:1,
    borderColor:'#fff',
    backgroundColor:'#00000071',
    padding:10,
    borderRadius:100,
    marginRight:10
  },

  buttonAmigo:{
    height:50,
    width:50,
    borderWidth:1,
    borderColor:'#fff',
    backgroundColor:'#00000071',
    padding:10,
    borderRadius:100,
  },

  textAmigo:{
    textAlign:'center',
    fontSize:16,
    fontWeight:'bold',
    color:'#fff'
  },

  textCerta:{
    textAlign:'center',
    fontSize:16,
    fontWeight:'bold',
    marginRight:10,
    color:'#fff'

  },
  textDesistir:{
    textAlign:'center',
    fontSize:16,
    fontWeight:'bold',
    marginRight:10,
    color:'#fff'
  }


})

export {styles}