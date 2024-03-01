import React, { useState } from "react"
import Todo from "../types/Todo"
import './TodoApp.css'


const TodoApp : React.FC = () => {
    const [title, setTitle] = useState<string>('')
    const [todos, setTodos] = useState<Todo[]>([])

    const handleTitleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const title = e?.target?.value
        setTitle(title)
    }

    const handleSubmit = () => {
        const newId = crypto?.randomUUID()
        const payload : Todo = {
            id : newId,
            name: title,
            completed: false,
        };
        if(title){
            setTodos((prevState)=> [...prevState, payload])
            setTitle('')
        }
        else{
            alert("Please enter title!")
        }
    }

    const handleCompleted = (id : string) => {
        const newData : Todo[] = todos.filter((todo)=> todo?.id !== id)
        setTodos(newData)
    }

    return (
        <>
        <div className="todo-app__input-container">
            <input type="text" name="title" placeholder="Enter title" onChange={handleTitleChange} className="todo-app__input-title" value={title}></input>
            <button type="submit" name="submit" onClick={handleSubmit} className="todo-app__input-button">Create</button>
        </div>
        <div>
            {
                todos?.map((todo, index)=>{
                    return(
                        <div key={index} className="todo-app__items-container">
                            <div className="todo-app__item-title">{todo?.name}</div>
                            <div><button onClick={()=>handleCompleted(todo?.id)}>✔️</button></div>
                        </div>
                    )
                })
            }
        </div>
        </>
    )
}

export default TodoApp