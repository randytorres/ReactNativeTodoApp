/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet } from 'react-native';
import { Todo } from './src/app/Todo.js';
import { Fancy } from './src/app/Fancy.js';
import { Reddit } from './src/app/Reddit.js';

const Main = () => (<Todo />);

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
  addHeight: {
    height: 50,
    backgroundColor: '#000000',
    color: '#ffffff',
  },
});

AppRegistry.registerComponent('Todo', () => Main);
