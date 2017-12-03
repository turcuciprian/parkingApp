import React, { Component } from 'react';
import { Button, Alert, AppRegistry, View, Image,Text, StyleSheet,TouchableHighlight  } from 'react-native';
import {cipStyles} from './styles';
class Car extends Component {
  constructor(props) {
    super(props);
    this.state = {distance: 100};

    setInterval(() => {
      this.setState(previousState => {
        if(this.state.distance>0){
          return { distance: previousState.distance-1 };
        }
        return { distance: previousState.distance };
      });
    }, 100);
  }

  render(){
    return (
      <TouchableHighlight style={cipStyles.car, { marginBottom: this.state.distance }}>
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
