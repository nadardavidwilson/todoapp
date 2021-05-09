import React from "react"

const Todo = ({text , todos, setTodos, todo}) =>{
    const deletehandler=()=>{
        setTodos(todos.filter((el)=>el.id!== todo.id))

    }
    return(
        <div className="todo">
             <li className="todo-item"> {text}</li>
                
                <button onClick={deletehandler} className="trash-btn">
                 <i className="fas fa-trash"></i>
                </button>   
        </div>
    );


}

export default Todo;