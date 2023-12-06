import React from 'react';
import './Form.css';

export type FormProps = {
    value?: string,
    onChange?: React.ChangeEventHandler,
    onCreate?: React.MouseEventHandler,
    onKeyPress?: React.KeyboardEventHandler,
}
const Form: React.FC<FormProps> = ({value, onChange, onCreate, onKeyPress}) => {
    return (
      <div className="form">
        <input value={value} onChange={onChange} onKeyPress={onKeyPress}/>
        <div className="create-button" onClick={onCreate}>
          추가
        </div>
      </div>
    );
  };

export default Form;