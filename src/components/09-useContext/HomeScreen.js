import { useContext } from "react";
import { UserContext } from "./UserContext";


export const HomeScreen = () => {

    const {user} = useContext(UserContext);
    console.log(user);
    // console.log(setUser);
    // console.log(probando);

    return (
        <div>
            <h1> Home Screen </h1>
            <hr />

            <pre>
                { JSON.stringify( user , null , 3) }
            </pre> 

        </div>
    )
}
