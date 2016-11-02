import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';

export class Todo extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      newTodo: ''
    };
  }

  componentWillMount() {
    fetch('http://localhost:300/todos', {
      headers: {
        'Accept': 'application/json'
    }
  })
  .then(res => res.json())
  .then(data => this.setState({todos}))
}


  handleChange(text) {
    this.setState({newTodo: text});
  }

  handlePress() {
    fetch('http://localhost:3000/Todos', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.newTodo
      }),

    })
    .then(res  => res.json())
    .then(todo => {
      const todos =[todo,...this.state.todos]
      this.setState({todos, newTodo: ''});

    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            value={this.state.newTodo}
            onChangeText={this.handleChange.bind(this)}
            />
          <TouchableOpacity
            style={styles.button}
            onPress={this.handlePress.bind(this)}>
            <Text style={styles.buttonText}>Create</Text>
          </TouchableOpacity>
        </View>
          <View style={styles.todos}>
            {this.state.todos.map((todo, i) => (
              <View key={i} style={styles.todo}>
                <Text style={styles.todoText} >{todo.name}</Text>
              </View>
            ))}
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  form: {
    flexDirection: 'row'
  },
  input: {
    flex: 0.7,
    fontSize: 24,
    color: '#000',
  },
  button: {
    flex: 0.3,
    borderWidth: 1,
    height: 50,
    borderColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  todos: {
    marginTop: 60,
  },
  todo: {
    borderBottomWidth: 1,
    borderBottomColor: 'grey'
  },
  todoText: {
    fontSize: 24
  }
});
