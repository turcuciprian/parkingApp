import React, { Component } from 'react';
import { Button, Alert, AppRegistry, View, Image,Text, StyleSheet,TouchableHighlight  } from 'react-native';
import {Car,BottomLayer} from './myProps';

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
      <View style={ styles.body} >
        <Car />
        <BottomLayer distance="--" />
      </View>
    );
  }
};
//styles:
const styles = StyleSheet.create({
  body:{
    flex:1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }
});

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => DisplayAnImage);
