import { useCallback, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

import '../03-ejemplos/multiple.css';

export const CallbackHook = () => {
    
    const [contador, setContador] = useState(5);
    // const incrementar = () =>{
    //     setContador(contador + 1);
    // }

    const incrementar = useCallback(  (numero) =>{
        setContador( c => c + numero ); //aqui recibo el argumento asi elimino la dependecia
    }, [ setContador ] ) //dependencias, si no cambia sabra que la funcion no cambio

    return (
        <div>
            <h1> useCallback : {contador} </h1>
            <hr />

            <ShowIncrement increment= {incrementar} />

        </div>
    )
}
