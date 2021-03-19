import { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

import '../01-useState/counter.css';

// const initialState = [{
//     id : new Date().getTime(),
//     desc : 'Aprender React.js',
//     done : false, 
// }];

const init = () => {

    return JSON.parse( localStorage.getItem( 'todos' ) ) || [] ;
    
    // return [{
    //     id : new Date().getTime(),
    //     desc : 'Aprender React.js',
    //     done : false,
    // }];
}

export const TodoApp = () => {
    
    const [ todos , dispatch ] = useReducer(todoReducer, [] , init ) //importar aquí el todoReducer, en el hook
    
    useEffect(() => {
        localStorage.setItem( 'todos' , JSON.stringify( todos ) );
        // console.log(todos);
    }, [todos])
    // console.log(description);

    const handleDelete = (todoId) =>{
        // console.log(todoId);

        const action ={
            type: 'borrar',
            payload : todoId
        }

        dispatch( action );
        // crear el action
        // hacer el dispatch
    }

    const handleToggle = (todoId) =>{
        dispatch({
            type: 'toggle',
            payload : todoId
        })
    }

    const handleAddTodo = (newTodo) => {

        dispatch({
            type : 'aumentar',
            payload : newTodo,
        });

    }

    return (
        <div className="" >
            <h1> TodoApp : ({todos.length}) </h1>
            <hr />
            
            <div className="row">

                <div className="col-5" >

                  <TodoList todos = {todos} handleToggle={handleToggle}  
                    handleDelete = {handleDelete}
                  />

                </div>


                <div className="col-7" >

                   <TodoAdd handleAddTodo = {handleAddTodo} />
                
                </div>

            </div>

        </div>
    )
}
