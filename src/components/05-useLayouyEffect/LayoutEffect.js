import { useLayoutEffect, useRef, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';

import './layout.css';

export const LayoutEffect = () => {

    const contador = useCounter(1);

    const {counter,increment,decrement} = contador;
    // const {counter,increment,decrement} = contador;
    
    const { data  } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    // console.log(loading);
    
    const { quote } = !!data && data[0]; //doble negacion, si esto es correcto, haz esto. condicion logica
    // console.log(author,quote);

    const [boxTamano , setBoxTamano] = useState({});

    const pTag = useRef();

    useLayoutEffect ( () => {

        setBoxTamano( pTag.current.getBoundingClientRect() );

    },[quote])
   
    return (
        <div>
            <h1> LayoutEffect : B.B. </h1>
            <hr /> 

            <blockquote className="blockquote text-left" >
                <p className="mb-1" ref={pTag} > 
                    {quote} 
                </p>
            </blockquote>

            {/* <pre>
                {JSON.stringify(boxTamano , null , 2 )}
            </pre> */}

            <button className="btn btn-primary" onClick={ () => increment() } >
                Siguiente frase : {counter}
            </button>

            { counter >1  && 
            <button className="btn btn-info" onClick={ () => decrement() } >
                Anterior Frase.
            </button>}    
                          
        </div>
    )
}

