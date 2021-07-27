const Card=(props)=>{
return (
<>
<div className="charge">
<h5> {props.h5}
</h5>

<p> {props.m} </p>
</div>


            
            	
   <div className="chk">
   <i class="far fa-clock theme_color_txt" aria-hidden="true"></i>
  <h5> {props.d}    </h5>
  
<h4>What's Included</h4>
<i  class="iii fa fa-check tick-col theme_color_txt" aria-hidden="true"></i>
<p> Concept - 1</p>
 <i  class="iii fa fa-check tick-col theme_color_txt" aria-hidden="true"></i>
 <p> Print-Ready</p>
 <i  class="iii fa fa-check tick-col theme_color_txt" aria-hidden="true"></i>

<p> Double-Sided</p>
       
       
       </div>   


       <button>Proceed $15</button>      
<h3>Contact Seller</h3>

</>
)

}
export default Card;