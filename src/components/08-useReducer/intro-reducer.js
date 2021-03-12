
//arreglos de Todos
const inicialTodo = [{
    id : 1,
    todo : 'comprar chocolate',
    done : false,
}];

//definimos la funcion Reducer
const todoReducer = ( state = inicialTodo , action ) => { //recibe el estado inicial y la acción
    
    if (action?.type === 'agregar') {
        return [ ...state , action.payload ]
    }

    return state;
}

//inicialización
let todos = todoReducer();

const nuevoTodo = {
    id : 2,
    todo : 'comprar hierba',
    done : false
};

//aqui la acción, y le diremos que tipo de accion sera y que tendra
const actionTodo = {
    type : 'agregar',
    payload: nuevoTodo 
};

//enviamos la acion al reducer
todos = todoReducer( todos , actionTodo ); //aqui enviamos los argumenos al Reducer


console.log(todos);
