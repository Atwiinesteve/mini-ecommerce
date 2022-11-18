import React from 'react';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import '../components/Product.css';

function Product({ image, name, description, price }) {

    return (

        <div className="product">
            <div className="product__image">
                <img src={image} alt="" />
            </div>
            <div className="product__name">
                <p>{name}</p>
            </div>
            <div className="product__description">
                <p>{description}</p>
            </div>
            <div className="product__price">
                <p>$ {price}</p>
            </div>
            <div className="product__buttons">
                <button>add to cart
                    <AddShoppingCartIcon style={ { fontSize: '1.5rem', marginLeft: '1rem', color: '#FF63F4' } } />
                </button>
                <button>view product</button>
            </div>
        </div>
        
    );

}

export default Product