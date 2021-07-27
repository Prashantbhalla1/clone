import './customer.css'
const Customer = () => {
  return (
    <div className="customer">
      <h2>Customer Reviews</h2>

      <div className="review">
        <img className="user" src="https://image.flaticon.com/icons/png/512/149/149071.png"></img>
        <p className="name"></p>
        <i class="fa fa-star on" aria-hidden="true"></i>
        <i class="fa fa-star on" aria-hidden="true"></i>
        <i class="fa fa-star on" aria-hidden="true"></i>
        <i class="fa fa-star on" aria-hidden="true"></i>
        <i class="fa fa-star on" aria-hidden="true"></i>
        <p>
          Thank you for this pretty design. I went over my revision limit (2)
          and he still gave me my final request. It was truly amazing working
          with this seller. Thank you!
        </p>
      </div>
    </div>
  );
};
export default Customer;
