import React from 'react';

import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import { Buttons } from './Buttons';
import './multiple.css';

export const MultipleCustomHook = () => {

    const contador = useCounter(1);

    const {counter} = contador;
    // const {counter,increment,decrement} = contador;
    
    const { loading, data , error } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    // console.log(loading);
    
    const { author , quote } = !!data && data[0]; //doble negacion, si esto es correcto, haz esto. condicion logica
    // console.log(author,quote);

    return (
        <div>
            <h1> Breaking Bad. </h1>
            <br />
            <h4> MultipleCustomHook. </h4>
            <hr /> 

            {
                loading ?(
                    <div className="alert alert-danger alert-link text-center">
                    Cargando...
                    </div>
                ):
                (
                    <>
                    <blockquote className="blockquote text-left" >
                    <p className="mb-1" > {quote} </p>
                    <footer className="blockquote-footer" > {author} </footer>
                    </blockquote>
                    <Buttons {...contador} />    
                    </>              
                )
            }

        </div>
    )
}
