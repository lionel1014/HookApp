import { useState } from "react";

//util para los input de los form, guarda el value de los input
export const useForm = ( initialState = {} ) => {
    
    const [form, setForm] = useState(initialState);

    const reset = () => {
        setForm( initialState )
    }

    const handleInputChange = ({ target }) =>{

        setForm( {
            ...form,
            [ target.name ] : target.value,
        })

    };

    return [ form , handleInputChange , reset];

};
