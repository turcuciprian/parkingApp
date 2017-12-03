import {  StyleSheet  } from 'react-native';
//styles:
const cipStyles = StyleSheet.create({
  body:{
    flex:1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  car: {
    width: 250,
    height: 323,
    marginBottom:100,

  },
  carImg: {
    width: 250,
    height: 350,
    marginBottom:-27,
  },
  bottomStuff:{
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
  },
  bigText:{
    fontSize:72,
    paddingTop:0,
    borderTopWidth: 4,
    borderTopColor: '#000',
    marginTop:0,
    width:300,
    textAlign:'center',
  },
  smallText:{
    fontSize: 32,
    textAlign:'center',
  },
  half:{
    flex:1
  },
  distance:{
    width: 150,
    height:123,
    flexDirection:'row',
    marginTop:-23,
    left:0

  }
});
export { cipStyles };
