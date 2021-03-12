

export const todoReducer = ( state = [] , action ) => {
    
    switch (action.type) {
        case 'aumentar':
            return [ ...state , action.payload ];

        case 'borrar' :
            return  state.filter( todo => todo.id !== action.payload );
            
        case 'toggle' :
            return state.map ( todo =>
                    (todo.id === action.payload)
                    ?{...todo, done : !todo.done}
                    : todo
                )

        case 'toggle-big' :
            return state.map ( todo => {

                if (todo.id === action.payload) {
                    return{
                        ...todo,
                        done : !todo.done, // cambiamos a true el terminado
                    }
                } else {
                    return todo;
                }

            });
            
        default:
            return state;
    }

}
