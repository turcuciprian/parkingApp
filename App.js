import React, { Component } from 'react';
import { AppRegistry, View, Image,Text, StyleSheet,  } from 'react-native';
const styles = StyleSheet.create({
  body:{

  },
  car: {
    width: 150,
    height: 300,
  },
  mainContainer: {
    flex:1,
    flexDirection:'column',
    alignItems:'center',
      justifyContent:'center'
  },
  bottomStuff:{ 
    flex:1,
    flexDirection:'column',
    alignItems:'center',
      justifyContent:'center',
      width:100,
      height:100
  },
  bigText:{
    fontSize:72
  },
  smallText:{
    fontSize: 22
  },
  half:{
    flex:1
  }
});
export default class DisplayAnImage extends Component {
  render() {
    return (
      // <View style={styles.body}>
      //   <View style={styles.half}>
      //       <View style={styles.carContainer}>
      //         <Image
      //           source={require('./src/img/car.png')}
      //           style={styles.car}
      //         />
      //         </View>
      //   </View>
      //   <View style={styles.half}>
      //     <View style={styles.carContainer}>
      //     <Text style={styles.bigText}>00</Text>
      //     <Text style={styles.smallText}>Centimeters</Text>
      //     </View>
      //   </View>
      // </View>
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <View style={{width: 150, height: 300}} >
        <Image
          source={require('./src/img/car.png')}
          style={styles.car}
        />
        </View>
        <View>
        <Text style={styles.bigText}>00</Text>
            <Text style={styles.smallText}>Centimeters</Text>
            </View>
      </View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('DisplayAnImage', () => DisplayAnImage);
