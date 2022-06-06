import React from 'react'
import { TodoItem } from './TodoItem'

export const Todos = (props) => {
    let mystyle = {
        minHeight: "70vh",
        margin: "40px auto"
    }
    return (
        <div>
            <div className="container" style={mystyle}>
                <h3>Todos List</h3>
                {props.todos.length === 0 ? <p>No todos to display</p> :
                    props.todos.map((todos) => {
                        return (<TodoItem todo={todos} key={todos.sno} onDelete={props.onDelete} />
                        )
                    }
                    )
                }
            </div>
        </div>
    )
}
