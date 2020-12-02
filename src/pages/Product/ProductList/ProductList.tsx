import React from 'react';

import ProductItem from './ProductItem/ProductItem';

function ProductList({ productsList }: any) {
  return (
    <div className="product--list">
      {productsList.map((item: any, idx: any) => (
        <ProductItem key={idx} {...item} />
      ))}
    </div>
  );
}

export default ProductList;
