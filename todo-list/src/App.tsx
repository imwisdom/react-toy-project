import React, { ChangeEvent, Component, KeyboardEvent, MouseEventHandler } from 'react';
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

  handleToggle = (id: number) => {
    console.log(id);
    const { todos } = this.state;

    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index];

    const nextTodos = [...todos]; //배열을 복사

    //기존의 값들을 복사하고 checked 값을 덮어쓰기
    nextTodos[index] = {
      ...selected, 
      checked: !selected.checked
    };

    this.setState({
      todos: nextTodos
    });
  }

  render(){
    const { input, todos } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
    } = this;
    
    return (
      <TodoListTemplate form={
        <Form
          value={input}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}/>}>
        <TodoItemList 
          todos={todos}
          onToggle={handleToggle}
          />
      </TodoListTemplate>
    )
  }
}

export default App;
