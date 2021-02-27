
import { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { Small } from './Small';

import '../01-useState/counter.css';

export const Memorize = () => {

    const{ counter , increment} = useCounter ( 5 );
    const [show, setShow] = useState(true);

    return (
        <div>
            <h1> Memorize. </h1>
            <hr />
            <h5> Counter: <Small value={counter} /> </h5>

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
