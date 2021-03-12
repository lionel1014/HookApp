

export const TodoListItem = ({todo, indice , handleToggle , handleDelete}) => {
    return (
        <li key={todo.id} className =" list-group-item  list-group-item-info" >
            <p className={`${ todo.done && 'complete ' }`}
                onClick = { () => handleToggle(todo.id) }
            >
                {indice + 1}. {todo.desc}
            </p>
            <button className="btn btn-danger" 
                onClick = { () => handleDelete(todo.id)}
            >
                Borrar
            </button>
        </li>
    )
}
