import { useRef } from 'react';
import './ref.css';

export const FocusSreen = () => {
    
    const inputRef = useRef();
    console.log(inputRef);

    const handleClick = () =>{
        inputRef.current.select(); //selecciona el elemento html
        console.log(inputRef);
    }
    
    return (
        <div>
            <h2> Focus Sreen. </h2>
            <hr />

            <input
                ref = {inputRef}   
                className="form-control"
                placeholder="Su nombre Sr."
            />
            <button className="btn btn-danger btn-sm mt-3" 
                onClick = {handleClick}
            >
                Focus
            </button>

        </div>
    )
}
