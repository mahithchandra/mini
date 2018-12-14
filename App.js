import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TodoList from './src/TodoList'
//import Notes from './src/Notes'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TodoList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
