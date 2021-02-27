import { useEffect, useState } from 'react';
import { Mensaje } from './Mensaje';

import './effects.css';


export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name : '', 
        email : '',
        number : '',
    })

    const {name,email,number} = formState;

    useEffect( () => {
        // console.log('HOLA PEPITO');
    }, [] );

    useEffect( () =>{
        // console.log('El formState cambió');
    }, [formState] ); //solo se disparara cuando formState cambie

    useEffect( () =>{
        // console.log('El número cambio');
    }, [number] );

    const handleInputChange = ({target}) =>{
        // console.log(e.target.name);
        
        setFormState({
            ...formState,
            [ target.name ] : target.value,

        });

    };

    return (
        <>

          <h1> useEffect </h1>
          <hr />

          <div className="form-group" > 
            <input type="text" name="name" className="form-control" 
                placeholder="Pon algo..." autoComplete="off" 
                value = {name} onChange= {handleInputChange} 
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
        
          { (name === 'pepe' ) && <Mensaje /> }  

        </>
    )
}

