import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container:{
    flex:1,

  },
  containerQuiz:{
    width:'100%',
    flex:1,
    alignItems:'center',
    paddingTop:70,
    backgroundColor:'#12a4d9'
  },

  progreEstatic: {
    height:5,
    width:'90%',
    backgroundColor:'red',
    borderRadius:1,
    borderWidth:1,
    borderColor: '#fff'
  },

  containerQuestao:{
    width:'97%',
    height:'16%',
    backgroundColor:'#00000069',
    marginBottom:20,
    borderRadius:30,
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
    marginTop:'10%',
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
  },

  containerLoading: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#12a4d9'
  },

  textLoading: {
    color: '#fff',
    fontSize: 18
  },

  containerConfirmation: {
    width: '100%',
    height: '100%',
    backgroundColor: '#0009',
    justifyContent:'center',
    alignItems:'center'
  },

  windowConfirmation: {
    backgroundColor: '#fff',
    width:200,
    height: 100,
    borderRadius: 5
  },

  textConfirmation: {
    textAlign: 'center',
    fontSize: 20,
    padding: 10,
    color:'#d4002e'
  },

  containerButtonConfirmation: {
    flexDirection:'row',
    justifyContent:'center',
    alignItems: 'center'
  },

  buttonYes: {
    padding: 10,
    backgroundColor:'#d4002e',
    marginRight: 5,
    width:62,
    borderRadius: 5
    
  },

  textBUttonYes: {
    textAlign:'center',
    fontSize:18,
    color: '#fff'
  },

  buttonNon: {
    padding: 10,
    borderColor:'#d4002e',
    borderWidth:1,
    width:62,
    borderRadius: 5,
    marginLeft:5
  },

  textBUttonNon: {
    textAlign:'center',
    fontSize:18,
    color: '#d4002e'
  }


})

export {styles}
