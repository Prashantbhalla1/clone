
import { NavLink,Route } from "react-router-dom";
import "./package.css"
import Link from './link.js'
import Card  from "./Card";
const Package=()=>{
return (


    <div className="packagebox">
       <Link/>

<Route path="/clone/" exact >
<Card h5="1 Layout + 1 person details + 300 dpi Print Ready JPG/PDF files" m="$50" d="3 Days Delivery"    /></Route> 
<Route path="/clone/stan" exact>

<Card h5="2 Layouts + Up to 2 persons details + 500 dpi Print Ready JPG/PDF files" m="$25" d="5 Days Delivery" />
  

</Route>
<Route path="/clone/prem" exact>

<Card h5="2 Layouts + Up to 3 persons details + Superior Quality 1200dpi PDF/PSD files + QR Code Quick Revisions" m="$50" d="7 Days Delivery" />
  
</Route>

		</div>
            
            



 
)
}
export default Package;