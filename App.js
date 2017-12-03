import React, { Component } from 'react';
import { Button, Alert, AppRegistry, View, Image,Text, StyleSheet,TouchableHighlight  } from 'react-native';
import {Car,BottomLayer} from './myProps';
import {cipStyles} from './styles';

export default class DisplayAnImage extends Component {

  _onStyleChange(){
    return {
      width: 150,
      height: 300,
      marginBottom:120
    }
  }

  render() {
    return (
      <View style={ cipStyles.body} >
        <Car />
        <BottomLayer distance="--" />
      </View>
    );
  }
};


// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => DisplayAnImage);
