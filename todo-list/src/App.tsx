import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoListTemplate from './components/TodoListTemplate';

class App extends Component {
  render(){
    return (
      <TodoListTemplate form={null}>
        템플릿 완성
      </TodoListTemplate>
    )
  }
}

export default App;
