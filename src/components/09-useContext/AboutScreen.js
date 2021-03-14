import { useContext } from "react";
import { UserContext } from "./UserContext";

export const AboutScreen = () => {
    
    const {user , setUser} = useContext(UserContext);
    


    return (
        <div>
            <h1> About Screen </h1>
            <hr />

            <pre>
                {JSON.stringify(user , null , 5)}
            </pre>

            <button className ="btn btn-info" 
                onClick = { () => setUser({})}
            >
                Cerrar sesión
            </button>

        </div>
    )
}
