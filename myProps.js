import React, { Component } from 'react';
import { Button, Alert, AppRegistry, View, Image,Text, StyleSheet,TouchableHighlight  } from 'react-native';
import {cipStyles} from './styles';
class Car extends Component {
  render(){
    return (
      <TouchableHighlight>
        <Image
          source={require('./src/img/car.png')}
          style={cipStyles.carImg} />
        </TouchableHighlight>
    )
  }
}
class BottomLayer extends Component{
  render(){
    return (
      <View style={cipStyles.bottomStuff}>
      <Text style={cipStyles.bigText}>{this.props.distance}</Text>
          <Text style={cipStyles.smallText}>Centimeters</Text>
          </View>
    )
  }
}
//styles:
const styles = StyleSheet.create({

});

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => DisplayAnImage);
export {Car, BottomLayer};
