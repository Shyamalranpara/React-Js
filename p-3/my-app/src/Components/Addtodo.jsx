import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../Store/Slice/TodoSlice';

function Addtodo() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input) {
            dispatch(addTodo(input));
            setInput('');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)} 
                />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    );
}

export default Addtodo;
