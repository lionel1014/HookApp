import { useEffect, useRef, useState } from 'react';


export const useFetch = ( url ) => {

    const [state, setState] = useState({ data : null , loading : true , error : null });
    const mounted = useRef(true);
    
    useEffect(() => {
        
        return () => {
            mounted.current = false;
        }
    }, [])

    useEffect(() => {
        
        fetch( url )
            .then( (resp) => resp.json())
            .then( data =>{

                if (mounted.current) {
                    setState( { loading : false, error : null, data});
                }
                else{
                    console.log('No se cargo el componente useFetch');
                }

            });

    }, [url]);

    return state;

};
 