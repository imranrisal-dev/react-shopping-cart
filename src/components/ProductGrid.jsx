import React from 'react';
import { products } from '../data/products';
import { ProductCard } from './ProductCard';

export const ProductGrid = () => {
  return (
    <main className="main-container">
      <h2 className="section-title">Products Catalog</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
};