import React from 'react'

export const ProductCard = (props) => {
  const products=props.products
  return (
    <div className='product-container'>
        <img src={products.icon} alt="" />
        <span>{products.name}</span>
        <span>{products.description}</span>
        <span>{products.price}</span>
        <button>Add</button>
    </div>
  );
};

export default ProductCard;