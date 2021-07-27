import { NavLink } from "react-router-dom";
const Link=()=>{
return (
    <div className="links">
    <ul className="package">
    <li>
    < NavLink activeClassName="aa" to="/" exact className="aaa">
    Basic Package
    
    </NavLink>
    </li>
    
    
    
    
    <li>
    < NavLink activeClassName="aa" to="/stan" className="aaa">
        Standard package
    </NavLink>
    </li>
    
    
    
    <li>
    <NavLink activeClassName="aa" to="/prem" className="aaa">
    
        Preminum Package
    </NavLink>
    
    </li>
    
    
    </ul>
    
    </div>
)
}
export default Link;