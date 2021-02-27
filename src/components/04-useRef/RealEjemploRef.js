import { useState } from 'react';
import { MultipleCustomHook } from '../03-ejemplos/MultipleCustomHook';

import './ref.css';

export const RealEjemploRef = () => {

    const [showC, setShowC] = useState(false)

    return (
        <div>
            <h1> Ejemplo Real de useReal. </h1>
            <hr />

            <button className="btn btn-dark mt-3"
                onClick={ () => {
                    setShowC( !showC );
                }}
            >
                Mostrar/Ocultar
            </button>
            
            { showC && <MultipleCustomHook />}


        </div>
    )
}
