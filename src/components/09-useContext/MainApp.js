import { useState } from "react"
import { AppRounter } from "./AppRounter"
import { UserContext } from "./UserContext"


export const MainApp = () => {

    const [user, setUser] = useState({
        id : 1234,
        name : 'Lionel',
        email : 'satur.1512@gmail.com'
    });

    // const user = {
    //     id : 1234,
    //     name : 'Lionel',
    //     email : 'satur.1512@gmail.com'
    // }

    return (
        <UserContext.Provider value={{
            user , 
            setUser,
            probando : 123
            }}>

            <AppRounter />

        </UserContext.Provider>
    )
}
