import React from 'react';

import ProductBanner from '../_components/ProductBanner';
import ProductInfo from '../_components/ProductInfo';

// Fetch product data function
async function fetchProduct(productId: string) {
  return {
    imageUrl: 'https://images.unsplash.com/photo-1599481238640-4c1288750d7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80', // Unsplash image URL
    title: `Product ${productId}`,
    details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et facilis debitis explicabo doloremque impedit nesciunt dolorem facere, dolor quasi veritatis quia fugit aperiam aspernatur neque molestiae labore aliquam soluta architecto?',
    price: '29.99',
  };
}

export default async function ProductDetails({ params }: { params: { productid: string } }) {
  const { productid } = params;

  // Fetch product data
  const product = await fetchProduct(productid);

  return (
    <div className="px-10 py-8 md:px-28 flex flex-col mb-52">
      <div className="grid justify-around grid-cols-1 gap-5 mt-10 sm:gap-0 sm:grid-cols-2 px-5">
       
        <ProductBanner imageUrl={product.imageUrl} />
        
      
        <div className="mt-8 sm:mt-0 px-5">
          <ProductInfo
                      title={product.title}
                      details={product.details}
                      price={product.price} imageUrl={''}          />
        </div>
      </div>
      <div className="mt-10"></div>
    </div>
  );
}
