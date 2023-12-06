import { Component, ReactNode } from "react";
import TodoItem from "./TodoItem";

type todoItemListProps = {
    todos?: ReactNode,
    onToggle?: any,
    onRemove?: any,
}
class TodoItemList extends Component<todoItemListProps> {
    render(){

        const { todos, onToggle, onRemove } = this.props;
        return (
            <div>
                <TodoItem text="안녕" />
                <TodoItem text="리액트" />
                <TodoItem text="반가워" />
            </div>
        );
    }
}

export default TodoItemList;