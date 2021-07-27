import logo from './logo.svg';
import './App.css';
import Second from './second.js'
import Header from './Header';
import Servicess from './service.js';
import Customer from './customer';
import Footer from './footer';
import { NavLink,Route, Switch } from "react-router-dom";


function App() {
  function diss(){
    document.querySelector(".burg").style.display="none";
 document.querySelector(".cutt").style.display="block";
  }
  return (
   <>
   <Switch>
   <Route path="/opennav">
  {diss}


<Header/>
  <ol className="boxx">
<li><a>
Music & Audio</a></li>
<li><a>Programming & Tech</a></li>
<li><a>Digital Marketing</a></li>
<li><a>Writing & Translation</a></li>
<li><a>Graphics & Design</a></li>
  </ol>

</Route>
<Route path="/" >
<Header/>
<div className="box">
<h1>Professional Business Card Design</h1>
<p>I will Design a Professional Business Card</p>
</div>

<Second/>

<Servicess/>
<Customer/>
<Footer/>
</Route>
</Switch>
</>




  );
}

export default App;
