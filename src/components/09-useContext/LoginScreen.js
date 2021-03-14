import { useContext } from "react"
import { UserContext } from "./UserContext"


export const LoginScreen = () => {

    const userContext = useContext(UserContext);
    const { user , setUser } = userContext;

    const obj = {
        
    }

    const handleObject = () =>{
        setUser({
            id2 : 321 ,
            nombre : 'pepe',
            ...user,
        });
    }

    return (
        <div>
            <h1> Login Screen </h1>
            <hr />

            <button className="btn btn-danger" 
                onClick = { handleObject } 
            >
                Probando
            </button>

        </div>
    )
}
