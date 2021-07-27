import { useState } from 'react';
import './image.css'

const ImageSlide=()=>{
   
  let [si,sa]=useState(0);
 
   function show(n=0) {
     sa(n);
    if(si>0){
    
    let x = document.querySelectorAll(".mbox");
     let y = document.querySelectorAll(".linee");
    for (let i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    for ( let i = 0; i < y.length; i++) {
      y[i].classList.remove("active");
    }
    if (n <= 0) {
      sa(4);
    }
   else if (n > x.length) {
    sa(1);
    }
    else sa(n);
  x[si-1].style.display="block"}

  
  }



    let aas="active";
    

return (
<div className="image">


<div className="mbox fade">

<img src="https://marketpresso.com/public/upload/96/lib/64811_1580215072_lib.jpg"></img>

</div>

<div className="mbox fade fade1 ">

<img src="https://marketpresso.com/public/upload/96/lib/80614_1580214967_lib.jpg"></img>

</div>
<div className="mbox fade fade1">

<img src="https://marketpresso.com/public/upload/96/lib/62376_1580214983_lib.jpg"></img>

</div>
<div className="mbox fade fade1">

<img src="https://marketpresso.com/public/upload/96/lib/50194_1580214952_lib.jpg"></img>

</div>
<div className="slid">

  <div className={`linee ${(si-1)==0 && aas}`} onClick={function doo(){
    console.log("He")
show(1)
  }}></div>
  <div className="linee" onClick={function doo(){
show(2)
}}></div>
  <div className="linee" onClick={function doo(){
show(3)
}}></div>
  <div className="linee" onClick={function doo(){
show(4)
}}></div>
  </div>

</div>

)
}
export default ImageSlide;