import React, { Component } from 'react';
import { AppRegistry, View, Image,Text, StyleSheet,  } from 'react-native';
const styles = StyleSheet.create({
  body:{

  },
  car: {
    width: 150,
    height: 300,
  },
  carImg: {
    width: 150,
    height: 300,
  },
  mainContainer: {
    flex:3,
    flexDirection:'column',
    alignItems:'center',
      justifyContent:'center'
  },
  bottomStuff:{
    flexDirection:'column',
    alignItems:'center',
  },
  bigText:{
    fontSize:72,
    paddingTop:20,
    borderTopWidth: 4,
    borderTopColor: '#000',
    marginTop:100,
    width:300,
    textAlign:'center',
  },
  smallText:{
    fontSize: 32
  },
  half:{
    flex:1
  },
  distance:{
    width: 150,
    height:123,
    backgroundColor:'red',
    flexDirection:'row',
    marginTop:-23,
    left:0

  }
});
export default class DisplayAnImage extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <View style={styles.car} >
        <Image
          source={require('./src/img/car.png')}
          style={styles.carImg}
        />
        <View style={styles.distance} />
        </View>
        <View style={styles.bottomStuff}>
        <Text style={styles.bigText}>--</Text>
            <Text style={styles.smallText}>Centimeters</Text>
            </View>
      </View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('DisplayAnImage', () => DisplayAnImage);
