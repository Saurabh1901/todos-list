import React from 'react'
import { TodoItem } from './TodoItem'

export const Todos = ({ todos, onDelete }) => {
    let myStyle = {
        minHeight: "60vh",
        margin: "40px auto"
    }
    return (
        <div className="container" style={myStyle}>
            <h3 className="my-3">Todos List</h3>
            {todos.length === 0 ? "No Todos to DISPLAY!!!" :
                todos.map((todo) => {
                    return (<TodoItem todo={todo} key={todo.sno} onDelete={() => { onDelete(todo) }} />)
                })
            }
        </div>
    )
}
