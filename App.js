/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import axios from 'axios'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      res:'res'
    }

  }  
  onClick(){
    axios
    .get('https://stormy-citadel-91590.herokuapp.com/api/data/test')
    .then(res => {
      console.log(res.data.msg)
      this.setState({res:res.data.msg})
    })
    .catch(err =>{
       console.log('err') 
      this.setState({res:err})
    }
     
    )
    
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <TouchableOpacity onPress={this.onClick.bind(this)}>
          <Text style={styles.instructions}>To get started, edit App.js</Text>
        </TouchableOpacity>
        
        <Text style={styles.instructions}>{instructions}</Text>
        <Text style={styles.instructions}>{this.state.res}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
