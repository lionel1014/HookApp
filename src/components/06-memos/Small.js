import { memo } from "react";

export const Small = memo(( { value } ) => {

    console.log('Estoy Triste :((((')

    return (
        <small>
            {value}
        </small>
    )
})
