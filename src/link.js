import { NavLink } from "react-router-dom";
const Link=()=>{
return (
    <div className="links">
    <ul className="package">
    <li>
    < NavLink activeClassName="aa" to="/clone/" exact className="aaa">
    Basic Package
    
    </NavLink>
    </li>
    
    
    
    
    <li>
    < NavLink activeClassName="aa" to="/clone/stan" className="aaa">
        Standard package
    </NavLink>
    </li>
    
    
    
    <li>
    <NavLink activeClassName="aa" to="/clone/prem" className="aaa">
    
        Preminum Package
    </NavLink>
    
    </li>
    
    
    </ul>
    
    </div>
)
}
export default Link;