import { Component } from "react";
import './TodoItem.css';

type TodoItemProps = {
    text: string,
    checked?: boolean,
    id?: number,
    onToggle?(id?: number) : React.MouseEventHandler,
    onRemove?(id?: number) : React.MouseEventHandler,
}
class TodoItem extends Component<TodoItemProps>{

    render() {
        const { text, checked, id, onToggle, onRemove} = this.props;

        return (
            <div className="todo-item">
                <div className="remove" onClick={(e) => {
                    e.stopPropagation(); // onRemove 후 부모화면에서 onToggle 이 실행되지 않도록 전파방지
                    }
                }>&times;</div>
                <div className={`todo-text ${checked && 'checked'}`}>
                    <div>{text}</div>
                </div>
                {
                    checked && (<div className="check-mark">✓</div>)
                }
            </div>
        );

    }
}

export default TodoItem;