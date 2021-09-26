import React from 'react';
// import { faShoppingCart } from 'react-icons/fa';
// icons are not importing for some reason 


const Product = (props) =>{
    const {name,director,gross,release,price,img} = props.product;
    return(
      <div className="col-lg-4 g-4">
           <div class="card h-100">
      <img src={img} class="card-img-top h-50 p-3" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{name} ({release})</h5>
        <p>Director: {director}</p>
        <p>Price: {price}$</p>
        <p><small>Gross: {gross}</small></p>
        <button className="btn btn-danger" onClick={() => props.handleAddToCart(props.product)}>
        {/* <FontAwesomeIcon icon={faShoppingCart}/> */}
        <i class="fas fa-shopping-cart me-1"></i>
          Add To Cart</button>
      </div>
      </div>
      </div>
    );
};

export default Product;
