// import { useState } from 'react';
import { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';

import './effects.css';


export const FormWhitCustomHook = () => {

    const [valuesForm, handleInputChange ] = useForm({
        name : '',
        password : '',
        email : '',
        number : '',
    })

    const {name,password,email,number} = valuesForm;

    useEffect(() => {
        console.log('El email fue modificado')
    }, [email]);

    // const handleInputChange = ({target}) =>{
    //     // console.log(e.target.name);
        
    //     setFormState({
    //         ...formState,
    //         [ target.name ] : target.value,

    //     });

    // };

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(valuesForm);
    };

    return (
        <form onSubmit = {handleSubmit}>

          <h1> FormWhitCustomHook </h1>
          <hr />

          <div className="form-group" > 
            <input type="text" name="name" className="form-control" 
                placeholder="Pon algo..." autoComplete="on" 
                value = {name} onChange= {handleInputChange} 
            />
          </div>
          
          <div className="form-group" > 
            <input type="password" name="password" className="form-control" 
                placeholder="Shhh..."  
                value = {password} onChange= {handleInputChange} 
            />
          </div>
        

          <div className="form-group" > 
            <input type="email" name="email" className="form-control" 
                placeholder="email@email.com" autoComplete="off" 
                value = {email} onChange= {handleInputChange} 
                />
          </div>

          <br/>
          <div className="form-group" > 
            <input type="number" name="number" className="form-control" 
                placeholder="telefono" autoComplete="off" 
                value = {number} onChange= {handleInputChange} 
            />
          </div>
        
        <button type="submit" className= "btn btn-info" >
            Enviar
        </button>

        </form>
    )
}

