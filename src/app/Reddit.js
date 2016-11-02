import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export class Reddit extends Component {

  constructor() {
    super();
    this.state = {
      posts: []
    }
  }

  componentWillMount() {
    fetch('https://www.reddit.com/.json', {
      Accept: 'application/json'
    })
    .then(res => res.json())
    .then(data =>
      this.setState({posts: data.data.children}
      ));
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.centerText}>Reddit</Text>
        <View>
          {this.state.posts.map(post => (
            <Text>{posts.data.author}</Text>
          ))}
        </View>
    </View>
    )
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1
  },
  centerText: {
    justifyContent: 'center',
    alignItems: 'center',
  }
})
