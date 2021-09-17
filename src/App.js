// todo App
import './App.css'
import { useState } from 'react';

let globalId = 0;

const App = () => {

    const [task, setTask] = useState('')
    const [notTodos, setNotTodos] = useState([])

    function createNotTodo(event){
        event.preventDefault()
        setNotTodos(oldNotTodos => {
            return [...oldNotTodos, {notTodo: task, id: globalId++ }]
        })
    }

    function deleteItem(itemID){
        setNotTodos(oldNotTodos => oldNotTodos.filter(item => item.id !== itemID))
    }

    return(
        <div>
            <h1>React Not-todo App</h1>

            <form onSubmit={createNotTodo}>
                <input type="text" value={task} onChange={event => {
                    setTask(() => {
                        return event.target.value
                    })
                }} />
                <button vlaue="submit">Create Not-todo</button>
            </form>

            <ul>
                {
                    notTodos.map(item => {
                        return <div key={item.id}>
                                    <li>{item.notTodo}</li>
                                    <button onClick={() => deleteItem(item.id)}>delete</button>
                        </div>
                    })
                }
            </ul>
        </div>  
    )
}

export default App;
