import { useEffect, useState } from "react"


export const Mensaje = () => {

    const [coords, setCoords] = useState({x: 0 , y : 0});
    const { x , y } = coords;
    
    useEffect(() => {

        const mouseMove = (e) =>{
            const coors = { x: e.x , y: e.y };
            setCoords(coors);
            
            // console.log(coors);
            // console.log(':(');
        }

        window.addEventListener( 'mousemove' , (mouseMove) );

        console.log('Componente(mensaje) montado.')

        return () => {
            console.log('Componente(mensaje) desmontado.');
            window.removeEventListener( 'mousemove' , mouseMove );
        }
    }, []);

    return (
        <div>
            <h4> Probando el mensaje. </h4>
            <p> X : {x}  Y :{y} </p>
        </div>
    )
}
