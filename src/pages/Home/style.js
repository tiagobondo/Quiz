import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#12a4d9',
    alignItems: 'center',
    justifyContent:'center'
  },

  Title: {
    fontSize:34,
    fontWeight: 'bold',
    color:'#fff'
  },

  SubTitle: {
    color:'yellow',
    fontSize:24,
    alignSelf:'flex-end',
    marginRight:'12%'
  },

  buttonPlay:{
    marginTop:'15%',
    width:'90%',
    height:45,
    backgroundColor:'#d4002e',
    borderRadius:5,
    borderWidth:1,
    borderColor:'#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },

  textPlay:{
    color:'#fff',
    fontSize:18,
    fontWeight:'bold',
  },

buttonHome:{
    marginTop:'2.5%',
    width:'90%',
    height:45,
    backgroundColor:'#d4002e',
    borderRadius:5,
    borderWidth:1,
    borderColor:'#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },

textButtonHome:{
    color:'#fff',
    fontSize:18,
    fontWeight:'bold',
  }

})

export{styles}