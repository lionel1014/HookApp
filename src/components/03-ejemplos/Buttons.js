import React from 'react';

export const Buttons = ({counter,increment,decrement}) => {
    return (
        <>

        <button className="btn btn-primary" onClick={ () => increment() } >
        Siguiente frase : {counter}
        </button>

        { counter >1  && 
        <button className="btn btn-info" onClick={ () => decrement() } >
        Anterior Frase.
        </button>}
        {/* {counter > 1 ? ():() */}
        </> 
    )
}