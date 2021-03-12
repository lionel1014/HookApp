import { useForm } from "../../hooks/useForm";


export const TodoAdd = ({handleAddTodo}) => {

    const [ {description} , handleInputChange , reset] = useForm({
        description : '',
    });
    
    //funcion del form, Agrega un TODO con su acción
    const handleSubmit = (e) =>{
        e.preventDefault();
        // console.log('funciona el submit');
        if (description.trim().length >= 3) {
            
            const newTodo = {
                id : new Date().getTime(),
                desc : description ,
                done : false, 
            };

            const action = {
                type : 'aumentar',
                payload : newTodo,
            }

            handleAddTodo( newTodo );
            reset();
        }
    }

    return (
        <>
            <h5> Agregar TODO </h5>
            <hr />
            
            <form onSubmit={ handleSubmit } >

                <input type="text" className="form-control" 
                    placeholder="Escribe algo" autoComplete="off"
                    name="description" 
                    value = {description}
                    onChange = {handleInputChange}
                />

                <button type="submit"
                    className="btn btn-danger  w-100"
                >
                    Agregar
                </button>

            </form>
        </>
    )
}
