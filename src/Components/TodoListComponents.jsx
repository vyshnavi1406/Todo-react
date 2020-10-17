import React from 'react';
import TodoitemsComponents from './TodoitemsComponents';
import { useSelector } from 'react-redux';

function TodoListComponents  () {
    let todos = useSelector(state => state)
    return (
        <div className="my-4">
            {todos.map(todo => {
                return <TodoitemsComponents key = {todo.id}/>
            })}
            
        </div>
    )
}

export default TodoListComponents;
