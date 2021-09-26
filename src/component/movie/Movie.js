import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from './Product/Product';
import './movie.css';


const Movie = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./movies.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className="movie ms-5 d-flex">
            <div className="product-container row w-75">
                {
                    products.map(product => <Product
                         key = {product.name}
                         product = {product}
                         handleAddToCart={handleAddToCart}
                    >
                    </Product>)
                }
            </div>
            <div className="cart-container mt-3 ms-5">
                <Cart cart={cart}
               >
                ></Cart>
            </div>
        </div>
    );
};


export default Movie;