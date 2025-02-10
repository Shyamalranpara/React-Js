import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../Store/Slice/TodoSlice';

const Todos = () => {
    const todos = useSelector(state => state.todos.todos);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Todos</h2>
            {todos.map((todo) => (
                <div key={todo.id}>
                    <span>{todo.text}</span>
                    <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default Todos;
