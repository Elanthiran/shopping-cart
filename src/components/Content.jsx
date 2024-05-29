import { useState } from "react";
import propTypes from 'prop-types';
const Content = ({product,cart,setCart}) => {
  const [change, setChange] = useState(false);
  function addToCart() {
    setChange(!change);
    setCart(cart + 1);
  }

  function removeFromCart() {
    setChange(!change);
    setCart(cart - 1);
  }
  
  return (
    <div className="col-sm-6 col-lg-3 mb-5">
      <div className="card h-100 mx-2">
      <img  className="card-img-top" src={product.image} alt=""/>
      <div className="bg-black text-light d-inline position-absolute top-0 left-999">{product.isSale?"sale":""}</div> 
      <div className="card-body p-4">
       <div className="text-center">
      <h5 className="fw-bolder">  {product.name} </h5>
       <div className="isStar"> {product.isStar}</div>
       <div ><span className="price1text-muted text-decoration-line-through">${product.price1}</span><span className="price2"> ${product.price2}</span></div>
       </div>
       </div> 
       <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div className="text-center">
          
        {!change ? (
            <button
              className="btn btn-outline-dark mt-auto"
              onClick={addToCart}
            >
              Add to cart
            </button>
          ) : (
            ""
          )}
          {change ? (
            <button
              className="productButton"
              color="error"
              onClick={removeFromCart}
            >
              Remove from cart
            </button>
          ) : (
            ""
          )}

        
        </div>
        </div>
        </div>
        </div>
    
  )
}

Content.propTypes={
product:propTypes.array,
cart:propTypes.number,
setCart:propTypes.number,
}

export default Content