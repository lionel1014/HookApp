import React, { memo } from 'react'

export const ShowIncrement = memo(({increment}) => {
    
    console.log('Jeje me volve a generar.');

    return (
        <button className="btn btn-success mt-2" 
            onClick= {() => { increment(3) }}  //funcion que espero de los parametros 
        >
            Aumentar
        </button>
    )
}
)