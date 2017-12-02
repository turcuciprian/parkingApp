import React, { Component } from 'react';
import { AppRegistry, View, Image, StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  car: {
    width: 150,
    height: 300,
  },
  carContainer: {
    flex:1,
    flexDirection:'row',
    alignItems:'center',
      justifyContent:'center'
  }
});

export default class DisplayAnImage extends Component {
  render() {
    return (
      <View style={styles.carContainer}>
        <Image
          source={require('./src/img/car.png')}
          style={styles.car}
        />
      </View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('DisplayAnImage', () => DisplayAnImage);
