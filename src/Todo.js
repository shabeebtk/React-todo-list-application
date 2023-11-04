import { useEffect, useState } from 'react';
import './todo.css'
function Todo() {

    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);
    const [todoInput, setTodoInput] = useState('');
    const hasCompleted = todos.some(todo => todo.isCompleted)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
      }, [todos]);

    const handleInputChange = (e) => {
        setTodoInput(e.target.value);
    };

    // add todo 
    const AddTodo = () => {
        if (todoInput.length > 1) {
            setTodos([...todos, {
                id: Date.now(),
                task: todoInput,
                isCompleted: false,
                createdAt: new Date().toLocaleString()
            }]);
            setTodoInput('');
        }
    };

    // delete todo 
    const DeleteTodo = (key) => {
        setTodos(todos.filter(todo => todo.id !== key))
    }

    // mark completed todo
    const TodoCompleted = (index) => {
        const completedTudos = todos.map((todo, i) => {
            if (i === index) {
                return {
                    ...todo,
                    isCompleted: true
                };
            }
            return todo;
        });

        setTodos(completedTudos)
    }

    // mark not completed 
    const TodoNotCompleted = (index) => {
        const completedTudos = todos.map((todo, i) => {
            if (i === index) {
                return {
                    ...todo,
                    isCompleted: false
                };
            }
            return todo;
        });

        setTodos(completedTudos)
    }


    return (
        <>
            <h2 style={{ textAlign: 'center', color: 'white' }}>TODO app</h2>

            <div className="text_field">
                <input className='input_field' type="text" value={todoInput} onChange={handleInputChange} />
                <button className='add_btn btn-2' onClick={AddTodo}>add</button>
            </div>

            <div className="todo_main_div">
                <div className="user_main_div">
                    {todos.map((todo, index) => (
                        <>
                            {todo.isCompleted === false &&
                                <div className="todo_list" key={todo.id}>
                                    <div style={ {display:'flex', gap:'10px'} }>
                                        <input type="checkbox" onChange={ ()=> TodoCompleted(index) } />
                                        <p style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }}>{todo.task}</p>
                                    </div>
                                    <div>
                                        <button className='delete_btn btn-2' onClick={() => DeleteTodo(todo.id)}>delete</button>
                                    </div>
                                </div>
                            }
                        </>
                    ))}
                </div>
            </div>


            { hasCompleted && <h4 style={{ textAlign: 'center', color: 'white' }}>Completed tasks</h4>}
            
            <div className="todo_main_div">
                <div className="user_main_div">
                    {todos.map((todo, index) => (
                        <>
                            {todo.isCompleted === true &&
                                <div className="todo_list" key={todo.id}>
                                    <div style={ {display:'flex', gap:'10px'} }>
                                        <input type="checkbox" checked={todo.isCompleted} onChange={ ()=> TodoNotCompleted(index) } />
                                        <p style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }}>{todo.task}</p>
                                    </div>
                                    <div>
                                        <button className='delete_btn btn-2' onClick={() => DeleteTodo(todo.id)}>delete</button>
                                    </div>
                                </div>
                            }
                        </>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Todo;

