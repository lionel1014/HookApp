import { useMemo, useState } from 'react';
import { procesosPesados } from '../../helpers/procesoPesado';
import { useCounter } from '../../hooks/useCounter';

import '../01-useState/counter.css';

export const MemoHook = () => {

    const{ counter , increment} = useCounter ( 1000 );
    const [show, setShow] = useState(true);

    const memoProcesoPesado = useMemo(() => procesosPesados(counter), [counter]);
    // console.log(memoProcesoPesado);

    return (
        <div>
            <h2> MemoHook. </h2>
            <hr />
            <h5> Counter: <small>{counter}</small> </h5>

            <p> {memoProcesoPesado} </p>

            <button className="btn btn-warning mt-3"  
                onClick={() => increment()}
            >
                Incrementar 
            </button>

            <button className="btn btn-danger mt-3 mx-2 " 
                onClick={() =>{
                    setShow( !show )
                }}
            >
                Mostrar/Ocultar {JSON.stringify( show )}
            </button>

        </div>
    )
}
