export const procesosPesados = (iteraciones) =>{

    for( let i = 0; i < iteraciones; i++ ){
        console.log('Muchas iteraciones');
    }

    return `${iteraciones} cantidad de iteraciones. `;
}