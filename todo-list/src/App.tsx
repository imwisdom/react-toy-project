import React, { ChangeEvent, Component, KeyboardEvent } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';
import { TodoItemProps } from './components/TodoItem';

class App extends Component {

  id = 3;

  todos: TodoItemProps[] = [
    { id: 0, text: ' 리액트 소개', checked: false},
    { id: 1, text: ' 리액트 소개', checked: true},
    { id: 2, text: ' 리액트 소개', checked: false},
  ]
  state = {
    input: '',
    todos: this.todos,
  }

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      input: e.target.value
    });
  }

  handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input: '',
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false
      })
    })
  }

  handleKeyPress = (e: KeyboardEvent) => {
    if(e.key === 'Enter'){
      this.handleCreate();
    }
  }
  render(){
    const { input, todos } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress
    } = this;
    
    return (
      <TodoListTemplate form={
        <Form
          value={input}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}/>}>
        <TodoItemList todos={todos}/>
      </TodoListTemplate>
    )
  }
}

export default App;
