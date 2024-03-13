import {Platform, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container:{
    flex:1,

  },
  containerQuiz:{
    width:'100%',
    flex:1,
    alignItems:'center',
    paddingTop:40,
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
    marginBottom:10,
    borderRadius:30,
    padding:20,
    justifyContent: 'center',
    marginBottom: 10
    
  },

  questao: {
    fontSize: Platform.OS == 'ios'?17:16,
    color:'#fff',
    textAlign:'center',
  }, 

  respostas: {
    width:'97%',
    height:Platform.OS == 'ios'?50:45,
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
    fontSize: Platform.OS == 'ios'?17:16
  },

  pontos: {
    alignSelf:'flex-start',
    marginLeft:'2%',
    fontSize: Platform.OS == 'ios'?17:16,
    color:'#fff',
    fontWeight:'bold',
    marginTop:'10%',
    marginBottom: 10
  },

  containerHelp: {
    flexDirection:'row',
    position:'absolute',
    bottom:'3%'
  },

  buttonCerta:{
    height:Platform.OS == 'ios'?60:60,
    width:Platform.OS == 'ios'?60:60,
    padding: Platform.OS == 'ios'?10:10,
  },

  buttonCerta2:{
    position: 'absolute',
    top: 13,
    left: 12
},

  buttonDesistir:{
    height:Platform.OS == 'ios'?60:60,
    width:Platform.OS == 'ios'?60:60,
    padding: Platform.OS == 'ios'?10:10,
  },

  buttonAmigo:{
    height:Platform.OS == 'ios'?60:60,
    width:Platform.OS == 'ios'?60:60,
    padding: Platform.OS == 'ios'?10:10,
  },

  buttonHelp: {
    margin: 2,
    backgroundColor:'#00000071',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    paddingLeft: 10,
    paddingTop: 10,
    borderWidth: 1,
    borderColor: '#fff'
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
  },
  containerEnd: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#12a4d9'
  },

  titleCongratulations: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff'
  },

  buttonPlayAgain: {
    marginTop: 10,
    width:'97%',
    height:45,
    backgroundColor:'#d4002e',
    borderRadius:5,
    borderWidth:1,
    borderColor:'#fff',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 5
  },

  textPlayAgain: {
    fontSize: 18,
    color: '#fff'
  },

  subtitle: {
    textAlign: 'center',
    fontSize: 16,
    color: '#fff',
    marginHorizontal: '5%'
  }


})

export {styles}
