import { Link, NavLink,} from 'react-router-dom';

export const BarraNav = () => {
    return (
        <div className="container col-sm-3 col-xs-11" >
        
        <nav className=" nav flex-column bg-dark " >
            <Link to="/" className="navbar-brand" >Hook's App</Link>
            
                <div className="navbar-nav" >
                    <NavLink exact activeClassName="active" to="/counterapp" className="nav-item nav-link btn-outline-danger" >1. CounterApp</NavLink>
                    <NavLink exact activeClassName="active" to="/counterwhitcustomhook" className="nav-item nav-link btn-outline-danger" >1.CounterWhitCustomHook</NavLink>
                    <NavLink exact activeClassName="active" to="/simpleform" className="nav-item nav-link btn-outline-success" >2. SimpleForm</NavLink>
                    <NavLink exact activeClassName="active" to="/formwhitcustomhook" className="nav-item nav-link btn-outline-success" >2. FormWhitCustomHook</NavLink>
                    <NavLink exact activeClassName="active" to="/multiplecustomhook" className="nav-item nav-link btn-outline-ligth" >3. MultipleCustomHook</NavLink>
                    <NavLink exact activeClassName="active" to="/focusscreen" className="nav-item nav-link btn-outline-info" >4. FocusSreen</NavLink>
                    <NavLink exact activeClassName="active" to="/realejemploref" className="nav-item nav-link btn-outline-info" >4. RealEjemploRef</NavLink>
                    <NavLink exact activeClassName="active" to="/layoutEffect" className="nav-item nav-link btn-outline-secondary" >5. LayoutEffect</NavLink>
                    <NavLink exact activeClassName="active" to="/memorize" className="nav-item nav-link btn-outline-warning" >6. Memorize</NavLink>
                    <NavLink exact activeClassName="active" to="/memohook" className="nav-item nav-link btn-outline-warning" >6. MemoHook</NavLink>
                    <NavLink exact activeClassName="active" to="/callbackhook" className="nav-item nav-link btn-outline-warning" >6. CallbackHook</NavLink>
                    <NavLink exact activeClassName="active" to="/padre" className="nav-item nav-link btn-outline-primary" >7. Tarea-Memo</NavLink>
                    <NavLink exact activeClassName="active" to="/todoapp" className="nav-item nav-link btn-outline-danger" >8. useReducer</NavLink>
                    <NavLink exact activeClassName="active" to="/mainapp" className="nav-item nav-link btn-outline-danger" >9. useContext </NavLink>
                    
                </div>
        </nav>
        </div>    

    )
}
