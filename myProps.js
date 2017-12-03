import React, { Component } from 'react';
import { Button, Alert, AppRegistry, View, Image,Text, StyleSheet,TouchableHighlight  } from 'react-native';
tempBottom = 120;

class Car extends Component {
  render(){
    return (
      <TouchableHighlight>
        <Image
          source={require('./src/img/car.png')}
          style={styles.carImg} />
        </TouchableHighlight>
    )
  }
}
class BottomLayer extends Component{
  render(){
    return (
      <View style={styles.bottomStuff}>
      <Text style={styles.bigText}>{this.props.distance}</Text>
          <Text style={styles.smallText}>Centimeters</Text>
          </View>
    )
  }
}
//styles:
const styles = StyleSheet.create({
  body:{
    flex:1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  car: {
    width: 150,
    height: 300,
    position:'absolute',
  },
  carImg: {
    width: 250,
    height: 300,
    marginTop:10,
  },
  mainContainer: {
    flex:1,
    flexDirection:'column',
    alignItems:'center',
      justifyContent:'center'
  },
  bottomStuff:{
    flex:3,
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    height: 10,
    backgroundColor: 'red'
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

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => DisplayAnImage);
export {Car, BottomLayer};
