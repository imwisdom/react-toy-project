import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';

class App extends Component {
  render(){
    return (
      <TodoListTemplate form={<Form/>}>
        <TodoItemList />
      </TodoListTemplate>
    )
  }
}

export default App;
