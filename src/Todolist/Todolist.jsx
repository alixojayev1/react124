import { useState } from 'react'
import '../Todolist/Todolist.css'

const Todolist = () => {
    const [newTodo, setNewTodo] = useState('');
    const [editingToDo, setEditingTodo] = useState(null);
    const [buttonText, setButtonText] = useState('Submit');

    const [todos, setTodos] = useState(() => {
        const storedItem = localStorage.getItem('todos')
        return storedItem ? JSON.parse(storedItem) : []
    })


    const handleChangeInput = (e) => {
        setNewTodo(e.target.value);
    }

    const handleToDoSubmit = (event) => {
        event.preventDefault();
        if (!newTodo.trim()) return;

        if (editingToDo !== null) {
            const updateToDo = todos.map((todo) => {
                if (todo.id === editingToDo) {
                    return { ...todo, text: newTodo }
                } else {
                    return todo;
                }
            })
            setTodos(updateToDo);
            setEditingTodo(null);
            setNewTodo('')
            setButtonText('Submit');
        }
        else {
            setTodos([...todos, { id: Date.now(), text: newTodo }]);
            setNewTodo('');
        }

    }

    localStorage.setItem('todos', JSON.stringify(todos))


    const handleDelete = (id) => {
        const updateToDos = todos.filter((todo) => todo.id !== id);
        setTodos(updateToDos);
    }
    const handleEditToDo = (id) => {
        const toDoEdit = todos.find((todo) => todo.id === id);
        setEditingTodo(id);
        setNewTodo(toDoEdit.text);
        setButtonText('Save');
    }

    return (
        <div>
            <h1>To Do List</h1>
            <form onSubmit={handleToDoSubmit}>
                <input className='input' type="text" value={newTodo} onChange={handleChangeInput} placeholder='Last Name' />
                <button className='submit_btn' type='submit'>SUBMIT</button>

            </form>
            {
                todos.map((todo) => (
                    <table>
                        <thead>
                            <tr>
                                <th>Last Name</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody key={todo.id}>
                            <td>{todo.text}</td>
                            <td> <button className='edit_btn' onClick={() => handleEditToDo(todo.id)}>Edit</button></td>
                            <td> <button className='delet_btn' onClick={() => handleDelete(todo.id)}>Delete</button></td>

                        </tbody>
                    </table>
                ))
            }

        </div>
    )
}

export default Todolist