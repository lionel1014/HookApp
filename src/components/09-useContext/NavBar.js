import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-info">
            <Link to="/" className="navbar-brand" >useContext</Link>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                <NavLink exact activeClassName="active" to="/" className="nav-item nav-link" >Home</NavLink>
                <NavLink exact activeClassName="active" to="/about" className="nav-item nav-link" >Acerca de ...</NavLink>
                <NavLink exact activeClassName="active" to="/login" className="nav-item nav-link" >Iniciar sesión</NavLink>
                </div>
            </div>
        </nav>
        // <nav>
        //     <ul>
        //         <li>
        //             <Link to="/" > Home </Link> 
        //         </li>
        //         <li>
        //             <Link to="/about" > Acerca de ...</Link>
        //         </li>
        //         <li>
        //             <Link to="/login" >Iniciar sesión</Link>
        //         </li>
        //     </ul>
        // </nav>
    )
}
