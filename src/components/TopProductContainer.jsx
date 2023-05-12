import React from "react";
import ProductCard from "./ProductCard";
import products from '../assets/products.json'

export const TopProductContainer = () => {
  return (
    <section className='top-product-container'>
        <h6>Milk Shakes</h6>
        <div className="product-container">
            {
                products.map((products)=>{
                    return <ProductCard products={products} key={products.id}/>
                })
            }
        </div>
    </section>
  );
};

export default TopProductContainer
