import React, { useCallback } from 'react';
import { Hijo } from './Hijo';
import { useState } from 'react';
// import { CallbackHook } from '../06-memos/CallbackHook';

import '../05-useLayouyEffect/layout.css';

export const Padre = () => {

    const numeros = [2,4,6,8,10];
    const [valor, setValor] = useState(0);
    
    const incrementar = useCallback(( num ) => {
        // setValor( valor + num )
        setValor ( v => v + num );
    },[setValor])
    
    return (
        <div>
            <h1>Padre</h1>
            <p> Total: { valor } </p>

            <hr />

            {
                numeros.map( n => (
                    <Hijo 
                        key={ n }
                        numero={ n }
                        incrementar={ incrementar }
                    />
                ))
            }
            {/* <Hijo /> */}
        </div>
    )
}
