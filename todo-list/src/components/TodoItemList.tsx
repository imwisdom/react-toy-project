import { Component } from "react";
import TodoItem, { TodoItemProps } from "./TodoItem";

type todoItemListProps = {
    todos: TodoItemProps[],
    onToggle?: any,
    onRemove?: any,
}
class TodoItemList extends Component<todoItemListProps> {
    render(){

        const { todos, onToggle, onRemove } = this.props;

        const todoList = todos.map(
            ({id, text, checked}) => (
                <TodoItem  
                    id={id}
                    text={text}
                    checked={checked}
                    onToggle={onToggle}
                    onRemove={onRemove}
                    key={id}
                />
            )
        );
        return (
            <div>
                {todoList}
            </div>
        );
    }
}

export default TodoItemList;